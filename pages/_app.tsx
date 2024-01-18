import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react';

export function useNetwork() {
	const [isOnline, setNetwork] = useState(true);
	useEffect(() => {
		window.addEventListener("offline",
			() => setNetwork(false)
		);
		window.addEventListener("online",
			() => setNetwork(true)
		);
	});
	return isOnline;
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
