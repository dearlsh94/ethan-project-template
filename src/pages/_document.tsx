import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class EthanDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head>
					{/* NOTE for Material */}
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

EthanDocument.getInitialProps = async (ctx: DocumentContext) => {
	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
	}
}

export default EthanDocument
