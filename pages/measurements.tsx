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
						<NumberInputHorizontal label='Body Weight' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
			</ul>
		</Section>

		<Section>

			<h2 className='text-xl font-semibold'>Meter</h2>

			<ul className=''>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Chest' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Biceps' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Tigh' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Weist' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Hips' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
			</ul>
		</Section>

		<Section>

			<h2 className='text-xl font-semibold'>Caliper</h2>

			<ul className=''>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Above Femur' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='2cm bellow belly button' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='2cm above belly button' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Hip' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
				<li className=''>
					<div className="grid gap-4 grid-cols-1 ">
						<NumberInputHorizontal label='Love handles' onChange={(num) => console.log(`Number sets has changed: ${num}`)} />
					</div>
				</li>
			</ul>
		</Section>
	</Page>
)

export default Recipes
