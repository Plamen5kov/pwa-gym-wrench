import AccordeonMy from '@/components/accordeon';
import Page from '@/components/page'
import Section from '@/components/section'
import { InvolvedMuscles } from '@/interfaces/exercise';
import { CalculationUtility } from '@/utilities/calculation-utility';
import { DIFICULTY_COLORS, exampleWorkout } from '@/utilities/constants';
import React, { useEffect, useState } from 'react';
import Model, { IExerciseData, IMuscleStats, ModelType, MuscleType } from 'react-body-highlighter';


const exampleResultOfWorkoutTransformation: Record<string, number> = {
	[MuscleType.CHEST]: 1920,
	[MuscleType.UPPER_BACK]: 1620,
	[MuscleType.TRICEPS]: 980,
	[MuscleType.BICEPS]: 320,
	[MuscleType.LOWER_BACK]: 320,
}

/**
 * TODO: think about sending the entire workout here so it can be
 * - changed dynamically while training
 * - the picture is changed instantly
 * - think about what the edit design should look like so it's easy to use
 */
const Workout = () => {

	const [exerciseData, setExerciseData] = useState([] as Array<IExerciseData>)

	useEffect(() => {
		const currentLoadedWorkout = (CalculationUtility.getInvolvedMuscles(exampleWorkout))

		const maxMuscleVolume = Object.values(currentLoadedWorkout).sort((a, b) => a - b).reverse()[0]

		setExerciseData(Object.keys(currentLoadedWorkout).map((x: string) => ({
			name: x,
			muscles: [x],
			frequency: CalculationUtility.calculateDificultyPerMuscle(currentLoadedWorkout[x], 0, maxMuscleVolume)
		} as IExerciseData)))
	}, [])

	const handleClick = React.useCallback(({ muscle, data }: IMuscleStats) => {
		const { exercises, frequency } = data;

		alert(`You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(exercises)}`)

	}, [exerciseData]);
	1
	return (
		<Page>
			<Section>
				<div className='grid grid-cols-2 gap-2'>
					<Model
						data={exerciseData}
						style={{ width: '10rem' }}
						onClick={handleClick}
						highlightedColors={DIFICULTY_COLORS}
					/>
					<Model
						data={exerciseData}
						style={{ width: '10rem' }}
						onClick={handleClick}
						type={ModelType.POSTERIOR}
						highlightedColors={DIFICULTY_COLORS}
					/>
				</div>

			</Section>
			<Section>
				<h2 className='text-xl font-semibold'>Workout</h2>

				<div></div>

				<AccordeonMy />

			</Section>
		</Page>
	)
}

export default Workout
