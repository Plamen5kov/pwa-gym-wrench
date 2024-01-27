import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
	{ label: 'Workout', href: '/workout' },
	{ label: 'Measurements', href: '/measurements' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full pt-safe'>

			<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
				<Link href='/'>
					<h1 className='font-medium'>Gym Wrench</h1>
				</Link>

				<nav className='flex items-center space-x-6'>
					<div className='hidden sm:block'>
						<div className='flex items-center space-x-6'>
							{links.map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									className={`text-sm ${router.pathname === href
											? 'text-indigo-500 dark:text-indigo-400'
											: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
										}`}
								>
									{label}
								</Link>
							))}
						</div>
					</div>

					<div
						title='User'
						className='h-10 w-10 rounded bg-white'
						style={{
							backgroundImage: "url('images/cross-of-double-side-wrenches.svg')",
						}}
					/>
				</nav>
			</div>
		</div>
	)
}

export default Appbar
