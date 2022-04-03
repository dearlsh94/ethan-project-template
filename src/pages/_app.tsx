import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import 'src/styles/globals.css'

const projectTemplate = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default projectTemplate