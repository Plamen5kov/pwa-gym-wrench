import { Exercise } from '@/interfaces/exercise';
import { Accordion, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import NumberInputHorizontal, { InputChangeEvent } from './number-input-horizontal';
import React from 'react';


interface Props {
  workout: Array<Exercise>
}

const initialFilters = {
  0: 0
} as Record<number, number>

function AccordeonMy({ workout }: Props) {

  const [workoutState, setWorkoutState] = useState(
    workout.map((e, i) => ({
      name: e.name,
      sets: e.sets.map((s, i) => ({ reps: s.reps, weight: s.weight }))
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
              workout.map((exercise, index) =>
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
              {workoutState[exerciseIndex].sets.map((set, index) =>
                <Button
                  key={`exercise-${exerciseIndex}-set-${index}`}
                  onClick={() => {
                    setSetIndex(index)
                  }}
                  {...(index === filter[exerciseIndex] ? { "pill": true } : { "outline": true, "pill": true })}> {index + 1}
                </Button>)
              }
            </div>
          </div>
          {workoutState[exerciseIndex].sets.map((set, setIndex) =>
            setIndex === filter[exerciseIndex]
              ?
              (<div className="gap-2 m-2">
                <NumberInputHorizontal
                  label='weight'
                  name={`exi-${exerciseIndex}-seti-${setIndex}-weight`}
                  initialValue={workoutState[exerciseIndex].sets[filter[exerciseIndex]].weight}
                  onChange={(target: InputChangeEvent) => {
                    // setWorkoutState({ ...workoutState, ...{ ...{ sets: [] } })
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