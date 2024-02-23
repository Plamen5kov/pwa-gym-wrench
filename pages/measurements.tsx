import NumberInputHorizontal from '@/components/number-input-horizontal'
import Page from '@/components/page'
import Section from '@/components/section'

const Recipes = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Weight</h2>
			<ul className=''>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Body Weight' label='Body Weight' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
			</ul>
		</Section>

		<Section>

			<h2 className='text-xl font-semibold'>Meter</h2>

			<ul className=''>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Chest' label='Chest' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Biceps' label='Biceps' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Tigh' label='Tigh' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Waist' label='Waist' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Hips' label='Hips' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
			</ul>
		</Section>

		<Section>

			<h2 className='text-xl font-semibold'>Caliper</h2>

			<ul className=''>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Above Femur' label='Above Femur' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='2cm bellow belly button' label='2cm bellow belly button' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='2cm above belly button' label='2cm above belly button' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Hip' label='Hip' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal name='Love handles' label='Love handles' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
			</ul>
		</Section>
	</Page>
)

export default Recipes
