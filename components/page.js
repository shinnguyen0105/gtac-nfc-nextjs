import Head from 'next/head'

const Page = ({ title, children }) => (
	<>
		{title ? (
			<Head>
				<title>{title} | GTAC x NFC CARD</title>
			</Head>
		) : null}
		<main className='mx-auto px-safe pt-20 pb-16 sm:pb-0 max-w-screen-md'>
			<div className='p-6'>{children}</div>
		</main>
	</>
)

export default Page
