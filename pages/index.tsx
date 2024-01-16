import Button from '@/components/button'
import Page from '@/components/page'
import Section from '@/components/section'
import { useEffect, useState } from 'react';

const Index = () => {
	const [iterator, setIterator] = useState<number>(1);

	useEffect(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			let iter = localStorage.getItem('iterator');
			if (iter) setIterator(parseInt(iter));
		}
	}, []);

	function handleSave(value: number) {
		if (typeof window !== "undefined" && window.localStorage) {
			localStorage.setItem("iterator", value.toString());
		}
	}

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
					We grow a lot of rice.
				</h2>

				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'>
						You love rice, and so does the rest of the world. In the crop year
						2008/2009, the milled rice production volume amounted to over{' '}
						<span className='font-medium text-zinc-900 dark:text-zinc-50'>
							448 million tons
						</span>{' '}
						worldwide.
					</p>
					<p id="label">{iterator}</p>
					<Button text="Click me!" onClick={() => {
						handleSave(iterator + 1)
						setIterator(iterator + 1)
					}
					} />
					<br />

					<p className='text-sm text-zinc-600 dark:text-zinc-400'>
						<a
							href='https://github.com/mvllow/next-pwa-template'
							className='underline'
						>
							Source
						</a>
					</p>
				</div>
			</Section>
		</Page>
	)
}

export default Index
