import { Workout } from '@/interfaces/exercise';
import { Accordion, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import NumberInputHorizontal, { InputChangeEvent } from './number-input-horizontal';
import React from 'react';


interface Props {
  workout: Workout
}

const initialFilters = {
  0: 0
} as Record<number, number>

function AccordeonMy({ workout }: Props) {

  const [workoutState, setWorkoutState] = useState(
    Object.values(workout).map((e, i) => ({
      name: e.name,
      sets: Object.values(e.sets).map((s) => ({ reps: s.reps, weight: s.weight }))
    })))

  const [filter, setFilter] = useState(initialFilters)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [setIndex, setSetIndex] = useState(0)

  useEffect(() => {
    setFilter({ ...filter, ...{ [exerciseIndex]: filter[exerciseIndex] ?? 0 } })
  }, [exerciseIndex])

  useEffect(() => {
    setFilter({ ...filter, ...{ [exerciseIndex]: setIndex } })
  }, [setIndex])

  return (
    <Accordion collapseAll={false} alwaysOpen={true} flush={true}>

      <Accordion.Panel>

        <Accordion.Title>Exercise</Accordion.Title>

        <Accordion.Content>
          <div className="grid place-items-center gap-2 m-2 ">
            {
              Object.values(workout).map((exercise, index) =>
                <Button
                  key={`exercise-${index}`}
                  onClick={() => setExerciseIndex(index)}
                  className='m-2'
                  {...(index === exerciseIndex ? { "pill": true } : { "outline": true, "pill": true })}> {exercise.name}
                </Button>)
            }
          </div>
        </Accordion.Content>

      </Accordion.Panel>

      <Accordion.Panel>

        <Accordion.Title>Set</Accordion.Title>

        <Accordion.Content>
          <div className="grid place-items-center gap-2 m-2 ">
            <div className='flex flex-row'>
              {
                Object.keys(workoutState[exerciseIndex].sets).map((index) =>
                  <Button
                    key={`exercise-${exerciseIndex}-set-${index}`}
                    onClick={() => {
                      setSetIndex(Number(index))
                    }}
                    {...(Number(index) === filter[exerciseIndex] ? { "pill": true } : { "outline": true, "pill": true })}> {Number(index) + 1}
                  </Button>)
              }
            </div>
          </div>
          {
            Object.keys(workoutState[exerciseIndex].sets).map((setIndex) =>
              setIndex === filter[exerciseIndex]?.toString()
                ?
                (<div className="gap-2 m-2">
                  <NumberInputHorizontal
                    label='weight'
                    name={`${workoutState[exerciseIndex].name}-${setIndex}-weight`}
                    initialValue={workoutState[exerciseIndex].sets[filter[exerciseIndex]].weight}
                    onChange={(target: InputChangeEvent) => {
                      setWorkoutState(
                        Object.assign(
                          workoutState,
                          {
                            name: target?.name?.split("-")?.[0],
                            sets: Object.assign(
                              workoutState[exerciseIndex].sets,
                              { [setIndex]: { weight: target.value } }
                            )
                          }
                        )
                      )
                      console.log(`weight for ${target.name}: ${target.value}`)
                    }}
                  />
                  <NumberInputHorizontal
                    label='reps'
                    name={`exi-${exerciseIndex}-seti-${setIndex}-reps`}
                    initialValue={workoutState[exerciseIndex].sets[filter[exerciseIndex]].reps}
                    onChange={(target: InputChangeEvent) => {

                      console.log(`reps for ${target.name}: ${target.value}`)
                    }}
                  />
                </div>)
                :
                null
            )}
        </Accordion.Content>

      </Accordion.Panel >

    </Accordion >
  );
}

export default AccordeonMy