import { useEffect, useState } from 'react'
import Page from '../components/page'
import Section from '../components/section'
import members from '../public/data/data'

const Member = ({ member }) => {
	const [pageURL, setPageURL] = useState('')
	const [isNativeShare, setNativeShare] = useState(false)
	useEffect(() => {
		setPageURL(window.location.href)
		if (navigator.share) {
			setNativeShare(true)
		}
	}, [])
	const handleCopyData = (data) => {
		async function screenShot() {
			try {
				if (isNativeShare) {
					await navigator.clipboard.writeText(data).then(
						function () {
							/* clipboard successfully set */
							console.log('success')
						},
						function () {
							/* clipboard write failed */
							console.log('failed ')
						}
					)
				}
			} catch (err) {
				console.error(err)
			}
		}
		screenShot()
	}
	return (
		<>
			{member ? (
				<Page title={member.name}>
					<Section>
						<div
							id='profile'
							className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-20'
						>
							<div className='p-4 md:p-12 lg:text-left text-center'>
								<div
									className='block rounded-full shadow-xl mx-auto sm:-mt-18 md:-mt-32 h-48 w-48 bg-cover bg-center'
									style={{
										backgroundImage: `url(images/${member.id}.png)`,
									}}
								></div>

								<h1 className='text-3xl font-bold pt-8'>
									{member.name ? member.name : 'No user exist'}
								</h1>

								<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
								<p className='pt-4 text-gray-500 text-base flex items-center justify-center lg:justify-start'>
									<svg
										className='h-4 fill-current text-green-700 pr-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
									>
										<path
											strokeWidth='5'
											strokeMiterlimit='10'
											stroke='#15803c'
											fill='none'
											d='M55.9 28.3c.1-.8.1-1.5.1-2.3a24 24 0 0 0-48 0c0 .8 0 1.6.1 2.3v.3C10.1 47.6 32 61 32 61s21.9-13.6 23.8-32.3z'
											name='layer2'
											strokeLinejoin='round'
											strokeLinecap='round'
										></path>
										<path
											d='M32 14v14h10'
											strokeWidth='5'
											strokeMiterlimit='10'
											stroke='#15803c'
											fill='none'
											name='layer1'
											strokeLinejoin='round'
											strokeLinecap='round'
										></path>
									</svg>{' '}
									{member.dateOfBirth}
								</p>
								<p className='pt-2 text-gray-500 text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
									<svg
										className='h-4 fill-current text-green-700 pr-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
									</svg>{' '}
									Da Nang, Viet Nam
								</p>
								{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
							</div>
						</div>
						{/* new component */}
						<div
							id='profile'
							className='rounded-3xl shadow-2xl bg-white mx-auto mt-20'
						>
							<div className='p-4 md:p-12 lg:text-left text-center'>
								<h1 className='text-3xl font-bold pt-8'>
									Email &#38; Phone number:
								</h1>

								<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
								<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start' onClick={() => handleCopyData(member.email)}>
									<svg
										className='h-4 fill-current text-green-700 pr-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
									>
										<path
											d='M54 33.6V2H10v31.6M18 12h10m-4 8h22m-28 8h28'
											strokeWidth='5'
											strokeMiterlimit='10'
											stroke='#15803c'
											fill='none'
											data-name='layer2'
											strokeLinejoin='round'
											strokeLinecap='round'
										></path>
										<path
											d='M42.08 41.944L62 28M2 28l19.92 13.944M2 62l20.929-21.071c3.905-3.9 14.237-3.9 18.143 0L62 62'
											strokeWidth='5'
											strokeMiterlimit='10'
											stroke='#15803c'
											fill='none'
											data-name='layer1'
											strokeLinejoin='round'
											strokeLinecap='round'
										></path>
										<path
											d='M54 21.063L62 28v34H2V28l8-6.937'
											strokeWidth='5'
											strokeMiterlimit='10'
											stroke='#15803c'
											fill='none'
											data-name='layer1'
											strokeLinejoin='round'
											strokeLinecap='round'
										></path>
									</svg>{' '}
									{member.email}{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
										className='h-4 fill-current text-green-700 pr-4 ml-3'
									>
										<path
												data-name='layer2'
												fill='none'
												stroke='#202020'
												strokeMiterlimit='10'
												strokeWidth='2'
												d='M16 48H2V2h46v14'
												strokeLinejoin='round'
												strokeLinecap='round'
											></path>
											<path
												data-name='layer1'
												fill='none'
												stroke='#202020'
												strokeMiterlimit='10'
												strokeWidth='2'
												d='M16 16h46v46H16z'
												strokeLinejoin='round'
												strokeLinecap='round'
											></path>
									</svg>
								</p>
								<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start' onClick={() => handleCopyData(member.phone)}>
									<svg
										className='h-4 fill-current text-green-700 pr-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
									>
										<path
											name='layer2'
											d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
										></path>
										<path
											name='layer1'
											d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
										></path>{' '}
									</svg>{' '}
									{member.phone}{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
										className='h-4 fill-current text-green-700 pr-4 ml-3'
									>
										<path
												data-name='layer2'
												fill='none'
												stroke='#202020'
												strokeMiterlimit='10'
												strokeWidth='2'
												d='M16 48H2V2h46v14'
												strokeLinejoin='round'
												strokeLinecap='round'
											></path>
											<path
												data-name='layer1'
												fill='none'
												stroke='#202020'
												strokeMiterlimit='10'
												strokeWidth='2'
												d='M16 16h46v46H16z'
												strokeLinejoin='round'
												strokeLinecap='round'
											></path>
									</svg>
								</p>
								{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
							</div>
						</div>
						{/* new component */}
						{member.linkedInUrl ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<h1 className='text-3xl font-bold pt-8'>LinkedIn:</h1>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
									<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-green-700 pr-4 hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
										</svg>{' '}
										<a href={member.linkedInUrl}>{member.linkedInUrl}</a>
									</p>
									{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
								</div>
							</div>
						) : (
							<></>
						)}

						{/* new component */}
						{member.behanceUrl ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<h1 className='text-3xl font-bold pt-8'>Behance:</h1>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>

									<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-green-700 pr-4  hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
										</svg>{' '}
										<a href={member.behanceUrl}>{member.behanceUrl}</a>
									</p>
									{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
								</div>
							</div>
						) : (
							<></>
						)}
						{/* new component */}
						{member.githubUrl ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<h1 className='text-3xl font-bold pt-8'>Github:</h1>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>

									<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-green-700 pr-4  hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
										</svg>{' '}
										<a href={member.githubUrl}>{member.githubUrl}</a>
									</p>
									{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
								</div>
							</div>
						) : (
							<></>
						)}
						{/* new component */}
						{member.facebookUrl ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<h1 className='text-3xl font-bold pt-8'>Facebook:</h1>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>

									<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-green-700 pr-4 hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
										</svg>{' '}
										<a href={member.facebookUrl}>{member.facebookUrl}</a>
									</p>
									{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
								</div>
							</div>
						) : (
							<></>
						)}
						{/* new component */}
						{member.instaUrl ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<h1 className='text-3xl font-bold pt-8'>Instagram:</h1>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
									<p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-green-700 pr-4 hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
										</svg>{' '}
										<a href={member.instaUrl}>{member.instaUrl}</a>
									</p>
									{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
								</div>
							</div>
						) : (
							<></>
						)}
						{/* new component */}
						{member.bankAccount ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<div className='pt-4 flex items-center justify-center lg:justify-start lg:h-18 lg:w-64'>
										<img
											src={'images/banks/' + member.bankAccountType + '.png'}
										/>
									</div>
									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
									<p
										className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-2xl flex items-center justify-center lg:justify-start'
										onClick={() => handleCopyData(member.bankAccount)}
									>
										{member.bankAccount}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 64 64'
											className='h-4 fill-current text-green-700 pr-4 ml-3'
										>
											<path
												data-name='layer2'
												fill='none'
												stroke='#202020'
												strokeMiterlimit='10'
												strokeWidth='2'
												d='M16 48H2V2h46v14'
												strokeLinejoin='round'
												strokeLinecap='round'
											></path>
											<path
												data-name='layer1'
												fill='none'
												stroke='#202020'
												strokeMiterlimit='10'
												strokeWidth='2'
												d='M16 16h46v46H16z'
												strokeLinejoin='round'
												strokeLinecap='round'
											></path>
										</svg>
									</p>
									{/* <p  className='pt-8 text-sm'>
								Totally optional short description about yourself, what you do
								and so on.
							</p> */}
								</div>
							</div>
						) : (
							<></>
						)}
						<div className='mt-5 text-center text-slate-400'>
							© Copyright owned by Greenwich Teaching Assistant Club - Danang
							Campus
						</div>
					</Section>
				</Page>
			) : (
				<></>
			)}
		</>
	)
}

export default Member

export async function getStaticPaths() {
	const paths = members.map((member) => ({
		params: { mid: member.id.toString() },
	}))
	return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
	if (!params) return null
	const mid = params.mid
	const member = members.find((s) => {
		return s.id === mid
	})
	return {
		props: { member: member },
	}
}
