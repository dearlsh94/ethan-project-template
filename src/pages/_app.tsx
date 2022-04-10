import type { AppProps } from 'next/app'
import 'src/styles/globals.css'

const projectTemplate = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default projectTemplate
