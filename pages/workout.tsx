import AccordeonMy from '@/components/accordeon';
import Page from '@/components/page'
import Section from '@/components/section'
import { CalculationUtility } from '@/utilities/calculation-utility';
import { DIFICULTY_COLORS } from '@/utilities/constants';
import React, { useState } from 'react';
import Model, { IExerciseData, IMuscleStats, ModelType, MuscleType } from 'react-body-highlighter';


const exampleResultOfWorkoutTransformation: Record<string, number> = {
	[MuscleType.CHEST]: 1920,
	[MuscleType.UPPER_BACK]: 1620,
	[MuscleType.TRICEPS]: 980,
	[MuscleType.BICEPS]: 320,
	[MuscleType.LOWER_BACK]: 320,
}

//TODO: accept transformed workout though props
const Workout = () => {

	const maxMuscleVolume = Object.values(exampleResultOfWorkoutTransformation).sort((a, b) => a - b).reverse()[0]

	const [data] = useState(Object.keys(exampleResultOfWorkoutTransformation).map((x: string) => ({
		name: x,
		muscles: [x],
		frequency: CalculationUtility.calculateDificultyPerMuscle(exampleResultOfWorkoutTransformation[x], 0, maxMuscleVolume)
	} as IExerciseData)))

	const handleClick = React.useCallback(({ muscle, data }: IMuscleStats) => {
		const { exercises, frequency } = data;

		alert(`You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(exercises)}`)

	}, [data]);

	return (
		<Page>
			<Section>
				<div className='grid grid-cols-2 gap-2'>
					<Model
						data={data}
						style={{ width: '10rem' }}
						onClick={handleClick}
						highlightedColors={DIFICULTY_COLORS}
					/>
					<Model
						data={data}
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
