import { ThemeProvider } from 'next-themes'
import Meta from '../components/meta'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
		<SnackbarProvider maxSnack={3}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				disableTransitionOnChange
			>
				<Meta />
				<Component {...pageProps} />
			</ThemeProvider>
		</SnackbarProvider>
	)
}

export default App
