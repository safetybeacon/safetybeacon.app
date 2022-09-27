import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Safety Beacon</title>
				<meta name='description' content='A digital &quot;angel shot&quot;' />
			</Head>

			<div className='page-width'>

				<div className='text-center my-10'>
					<div className='text-5xl mb-5'>Safety Beacon</div>
					<div className='text-xl'>A non-for-profit, community-based safety network.</div>
				</div>

				<div className='my-10'>
					<div className='text-xl font-bold mb-3'>The concept</div>
					<div className='mb-2'>You&apos;ve probably heard of the &quot;angel shot&quot;, where somebody can ask at the bar for an &quot;angel shot&quot; if they feel unsafe on a date so the staff can (subtly) make sure they can get out/home safely.</div>
					<div className='mb-2'>I&apos;m imagining a similar thing in digital form.</div>
					<div className='mb-2'>You sign up (requiring ID check), and then you&apos;re able to send out a &quot;help me&quot; notification to everyone who also has this app within a ~300m radius so they can step in to help and/or call the police.</div>
				</div>

				<div className='my-10'>
					<div className='text-xl font-bold mb-3'>Open source</div>
					<div className='mb-2'>To re-enforce the &quot;community-based safety network&quot; ideology, all source code will be published under the <a href="https://choosealicense.com/licenses/gpl-3.0/">GNU General Public License v3.0</a>, allowing anyone to contribute while forbidding the distribution of closed source versions.</div>
					<div className='mb-2'>If you are a developer, contributions are encouraged! Feel free to open any issues or pull requests on any repos in the <a href='https://github.com/safetybeacon'>GitHub organisation</a>!</div>
				</div>

				{/* <div className='my-10'>
					<div className='text-xl font-bold mb-3'>Contribution recognition</div>
					
					WE SHOULD HAVE A SECTION HERE TO DISPLAY SOME NAMES OF PEOPLE WHO HAVE CONTRIBUTED TO SAFETY BEACON.
					NO MATTER WHETHER VIA SOURCE CODE, FINANCIAL, ETC.

					ACTUALLY COULD MAKE SENSE TO HAVE THE FINANCIAL CONTRIBUTIONS IN A "SPONSORS" SECTION.. WILL DECIDE LATER.

				</div> */}
			</div>
		</div>
	)
}

export default Home
