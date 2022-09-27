import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

// import '@fontsource/roboto'
// import '@fontsource/poppins'

// import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

// import '@fortawesome/fontawesome-svg-core/styles.css'

// library.add(fas, fab, far)
// config.autoAddCss = false


// import Header from '../components/header'
import Footer from '../components/footer'


function SafetyBeaconWebsite({ Component, pageProps }: AppProps) {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
				{/* <link rel='icon' href='/favicon.svg' /> */}
			</Head>

			{/* <Header></Header> */}

			<div className='flex-grow'>
				<Component {...pageProps} />
			</div>

			<Footer></Footer>

		</div>
	)
}

export default SafetyBeaconWebsite
