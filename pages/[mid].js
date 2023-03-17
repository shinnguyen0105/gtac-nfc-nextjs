import { useEffect, useState } from 'react'
import Page from '../components/page'
import Section from '../components/section'
import members from '../public/data/data'
import Link from 'next/link';


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

								<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>

								<p className='common-class pt-4 text-black-500 text-base flex items-center justify-center lg:justify-start'>
									<svg
										className='h-4 fill-current text-red-700 pr-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
										version="1.1" id="Capa_1"
									>
										<path d="M55.6,56.2C48.7,42.4,41.9,28.7,35,14.9c1.5-1,2.5-2.7,2.5-4.6c0-3.1-2.5-5.5-5.5-5.5c-3.1,0-5.5,2.5-5.5,5.5  c0,2.1,1.2,3.9,2.9,4.9c-7,13.7-14,27.4-21,41.1c-0.7,1.3,0.1,3,1.7,3c14.6,0,29.2-0.1,43.7-0.1C55.5,59.2,56.3,57.5,55.6,56.2z   M24.2,34.1l13.5-5.1c1,2,2,4,3,6l-20.6,7C21.4,39.5,22.8,36.8,24.2,34.1z M26.9,28.9c1.8-3.5,3.6-7.1,5.4-10.6  c1.2,2.4,2.4,4.8,3.6,7.2L26.9,28.9z M17.5,47.2l25-8.5c1,2,2,4,3,6l-32,10.6C14.8,52.6,16.1,49.9,17.5,47.2z M47.2,48.3  c1.1,2.3,2.3,4.6,3.4,6.9c-8.2,0-16.3,0-24.5,0L47.2,48.3z M32,8.7c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.6,1.4-1.4,1.5c-0.1,0-0.1,0-0.2,0  c-0.8,0-1.5-0.7-1.5-1.5C30.5,9.4,31.2,8.7,32,8.7z" />
									</svg>{' '}
									{member.dateOfBirth}
								</p>

								<p className='common-class pt-4 text-black-500 text-base flex items-center justify-center lg:justify-start'>									<svg
									className='h-4 fill-current text-black-500 pr-4'
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
								<p className='common-class pt-4 text-black-500 text-base flex items-center justify-center lg:justify-start'>
									<svg
										className='h-4 fill-current text-black-700 pr-4'
										fill="#000000"
										viewBox="0 0 512 512"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" />
									</svg>{' '}
									{member.email}{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
										className='h-4 fill-current text-black pr-4 ml-3'
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



								<p className='common-class pt-4 text-black-500 text-base flex items-center justify-center lg:justify-start'>									<svg
									className='h-4 fill-current text-black-500 pr-4'
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
										className='h-4 fill-current text-black-500 pr-4 ml-3'
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
							</div>
						</div>
						{/* new component */}
						<div
							id='profile'
							className='rounded-3xl shadow-2xl bg-white mx-auto mt-20'
						>
						</div>
						{/* new component */}
						{member.linkedInUrl ? (
							<div
								id='profile'
								className='rounded-3xl shadow-2xl bg-white mx-auto mt-10'
							>
								<div className='p-4 md:p-12 lg:text-left text-center'>
									<div className='w-32 h-32 flex items-center justify-center lg:justify-start mx-auto'>
										<a href={member.linkedInUrl}>
											<img
												src="images/social_media/LinkedIn.png"
												className='w-full h-full object-contain'
											/>
										</a>
									</div>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>

									{/* <p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-blue-700 pr-4 hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
										>
											<path d='M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z' />
											<path d='M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z' />
										</svg>{' '}
									</p> */}
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
									<div className='w-32 h-32 flex items-center justify-center lg:justify-start mx-auto'>
										<a href={member.behanceUrl}>
											<img
												src="images/social_media/Behance.png"
												className='w-full h-full object-contain'
											/>
										</a>
									</div>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>

									{/* <p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-black-700 pr-4  hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
										>
											<path d="M20.07,6.35H15V7.76h5.09ZM19,16.05a2.23,2.23,0,0,1-1.3.37A2.23,2.23,0,0,1,16,15.88a2.49,2.49,0,0,1-.62-1.76H22a6.47,6.47,0,0,0-.17-2,5.08,5.08,0,0,0-.8-1.73,4.17,4.17,0,0,0-1.42-1.21,4.37,4.37,0,0,0-2-.45,4.88,4.88,0,0,0-1.9.37,4.51,4.51,0,0,0-1.47,1,4.4,4.4,0,0,0-.95,1.52,5.4,5.4,0,0,0-.33,1.91,5.52,5.52,0,0,0,.32,1.94A4.46,4.46,0,0,0,14.16,17a4,4,0,0,0,1.46,1,5.2,5.2,0,0,0,1.94.34,4.77,4.77,0,0,0,2.64-.7,4.21,4.21,0,0,0,1.63-2.35H19.62A1.54,1.54,0,0,1,19,16.05Zm-3.43-4.12a1.87,1.87,0,0,1,1-1.14,2.28,2.28,0,0,1,1-.2,1.73,1.73,0,0,1,1.36.49,2.91,2.91,0,0,1,.63,1.45H15.41A3,3,0,0,1,15.52,11.93Zm-5.29-.48a3.06,3.06,0,0,0,1.28-1,2.72,2.72,0,0,0,.43-1.58,3.28,3.28,0,0,0-.29-1.48,2.4,2.4,0,0,0-.82-1,3.24,3.24,0,0,0-1.27-.52,7.54,7.54,0,0,0-1.64-.16H2V18.29H8.1a6.55,6.55,0,0,0,1.65-.21,4.55,4.55,0,0,0,1.43-.65,3.13,3.13,0,0,0,1-1.14,3.41,3.41,0,0,0,.37-1.65,3.47,3.47,0,0,0-.57-2A3,3,0,0,0,10.23,11.45ZM4.77,7.86H7.36a4.17,4.17,0,0,1,.71.06,1.64,1.64,0,0,1,.61.22,1.05,1.05,0,0,1,.42.44,1.42,1.42,0,0,1,.16.72,1.36,1.36,0,0,1-.47,1.15,2,2,0,0,1-1.22.35H4.77ZM9.61,15.3a1.28,1.28,0,0,1-.45.5,2,2,0,0,1-.65.26,3.33,3.33,0,0,1-.78.08h-3V12.69h3a2.4,2.4,0,0,1,1.45.41,1.65,1.65,0,0,1,.54,1.39A1.77,1.77,0,0,1,9.61,15.3Z"></path></svg>{' '}
										<a href={member.behanceUrl}>{member.behanceUrl}</a>
									</p> */}
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
									<div className='w-32 h-32 flex items-center justify-center lg:justify-start mx-auto'>
										<a href={member.githubUrl}>
											<img
												src="images/social_media/GitHub.png"
												className='w-full h-full object-contain'
											/>
										</a>
									</div>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>

									{/* <p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-black-700 pr-4  hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
										>
											<path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" />
										</svg>{' '}
										<a href={member.githubUrl}>{member.githubUrl}</a>
									</p> */}
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
									<div className='w-32 h-32 flex items-center justify-center lg:justify-start mx-auto'>
										<a href={member.facebookUrl}>
											<img
												src="images/social_media/Facebook.png"
												className='w-full h-full object-contain'
											/>
										</a>
									</div>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>

									{/* <p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-blue-700 pr-4 hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z' /><path d='M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z' />										</svg>{' '}
										<a href={member.facebookUrl}>{member.facebookUrl}</a>
									</p> */}
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
									<div className='w-32 h-32 flex items-center justify-center lg:justify-start mx-auto'>
										<a href={member.instaUrl}>
											<img
												src="images/social_media/Instagram.png"
												className='w-full h-full object-contain'
											/>
										</a>
									</div>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>

									{/* <p className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-sm flex items-center justify-center lg:justify-start'>
										<svg
											className='h-4 fill-current text-pink-700 pr-4 hidden sm:block'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 22'
										>
											<path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
										</svg>{' '}
										<a href={member.instaUrl}>{member.instaUrl}</a>
									</p> */}
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
									<div className='w-32 h-32 flex items-center justify-center lg:justify-start mx-auto'>
										<img
											src={'images/banks/' + member.bankAccountType + '.png'}
										/>
									</div>

									<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black-500 opacity-25'></div>
									<p
										className='pt-2 text-gray-500 text-sm sm:text-xl lg:text-2xl flex items-center justify-center lg:justify-start'
										onClick={() => handleCopyData(member.bankAccount)}
									>
										{member.bankAccount}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 64 64'
											className='h-4 fill-current text-black-500 pr-4 ml-3'
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

						{/* back to homepage */}
						{/* /* <div
							id='profile'
							className='rounded-3xl shadow-2xl mx-auto mt-10'
						>
							<div className='flex justify-center'>
								<Link href='/'>
									<button className='bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'>
										Back to Homepage
									</button>
								</Link>
							</div>
						</div> */}
						<div className='mt-5 text-center text-slate-400'>
							© Copyright owned by Greenwich Teaching Assistant Club - Danang
							Campus
						</div>
					</Section>
				</Page>
			) : (
				<></>
			)
			}
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
