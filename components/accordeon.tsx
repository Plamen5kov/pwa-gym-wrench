import { Exercise } from '@/interfaces/exercise';
import { Accordion, Button } from 'flowbite-react';
import { useState } from 'react';
import NumberInputHorizontal from './number-input-horizontal';
import React from 'react';


interface Props {
  workout: Array<Exercise>
}

function AccordeonMy({ workout }: Props) {

  const [workoutState, setWorkoutState] = useState(
    workout.map((e, i) => ({
      name: e.name,
      sets: e.sets.map((s, i) => ({ reps: s.reps, weight: s.weight }))
    })))

  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [setIndex, setSetIndex] = useState(
    workoutState
      .map((e, index) => ({ [index]: 0 }))
      .reduce((acc: any, val) => ({ ...acc, ...val }), {})
  )
  console.log(workoutState)
  return (
    <Accordion collapseAll={false} alwaysOpen={true} flush={true}>
      <Accordion.Panel>
        <Accordion.Title>Exercise</Accordion.Title>
        <Accordion.Content>
          <div className="grid place-items-center gap-2 m-2 ">
            {workout.map((exercise, index) => <Button
              onClick={() => setExerciseIndex(index)}
              className='m-2'
              {...(index === exerciseIndex ? { "pill": true } : { "outline": true, "pill": true })}> {exercise.name}
            </Button>)}
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Set</Accordion.Title>
        <Accordion.Content>
          <div className="grid place-items-center gap-2 m-2 ">
            <div className='flex flex-row'>
              {workoutState[exerciseIndex].sets.map((set, index) => <Button
                onClick={() => {
                  setSetIndex({ ...setIndex, ...{ [exerciseIndex]: index } })
                }}
                {...(index === setIndex[exerciseIndex] ? { "pill": true } : { "outline": true, "pill": true })}> {index + 1}
              </Button>)}
            </div>
          </div>
          <div className="gap-2 m-2">
            <NumberInputHorizontal label='weight' initialValue={workoutState[exerciseIndex].sets[setIndex[exerciseIndex]].weight} onChange={(num) => console.log(`weight changed: ${num}`)} />
            <NumberInputHorizontal label='reps' initialValue={workoutState[exerciseIndex].sets[setIndex[exerciseIndex]].weight} onChange={(num) => console.log(`reps have changed: ${num}`)} />
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default AccordeonMy