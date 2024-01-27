import AccordeonMy from '@/components/accordeon';
import Page from '@/components/page'
import Section from '@/components/section'
import React from 'react';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';

const Story = () => {

	const data: IExerciseData[] = [
		{ name: 'Bench Press', muscles: ['chest', 'triceps', 'front-deltoids'], frequency: 1 },
		{ name: 'Push Ups', muscles: ['chest'], frequency: 2 },
	];

	const handleClick = React.useCallback(({ muscle, data }: IMuscleStats) => {
		const { exercises, frequency } = data;

		alert(`You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(exercises)}`)

	}, [data]);

	return (
		<Page>
			<Section>
				<div className='grid grid-cols-2 gap-15'>
					<Model
						data={data}
						style={{ width: '15rem'  }}
						onClick={handleClick}
					/>
					<Model
						data={data}
						style={{ width: '15rem' }}
						onClick={handleClick}
						type='posterior'
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

export default Story
