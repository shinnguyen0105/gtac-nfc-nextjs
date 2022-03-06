import Page from '../components/page'
import Section from '../components/section'

const Member = ({ member }) => {
	return (
		<Page>
			<Section>
				<div
					id='profile'
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-20'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<div
							className='block rounded-full shadow-xl mx-auto sm:-mt-18 md:-mt-32 h-48 w-48 bg-cover bg-center'
							style={{
								backgroundImage:
									'url(https://images.unsplash.com/photo-1612480797665-c96d261eae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)',
							}}
						></div>

						<h1 className='text-3xl font-bold pt-8'>Nguyen Cong Nhat</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path stroke-width="5"
  stroke-miterlimit="10" stroke="#15803c" fill="none" d="M55.9 28.3c.1-.8.1-1.5.1-2.3a24 24 0 0 0-48 0c0 .8 0 1.6.1 2.3v.3C10.1 47.6 32 61 32 61s21.9-13.6 23.8-32.3z"
  data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path>
  <path d="M32 14v14h10" stroke-width="5" stroke-miterlimit="10"
  stroke="#15803c" fill="none" data-name="layer1" stroke-linejoin="round"
  stroke-linecap="round"></path>
							</svg>{' '}
							01/05/1999
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-20'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>Email &#38; Phone number:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path d="M54 33.6V2H10v31.6M18 12h10m-4 8h22m-28 8h28"
  stroke-width="5" stroke-miterlimit="10" stroke="#15803c" fill="none" data-name="layer2"
  stroke-linejoin="round" stroke-linecap="round"></path>
  <path d="M42.08 41.944L62 28M2 28l19.92 13.944M2 62l20.929-21.071c3.905-3.9 14.237-3.9 18.143 0L62 62"
  stroke-width="5" stroke-miterlimit="10" stroke="#15803c" fill="none" data-name="layer1"
  stroke-linejoin="round" stroke-linecap="round"></path>
  <path d="M54 21.063L62 28v34H2V28l8-6.937" stroke-width="5" stroke-miterlimit="10"
  stroke="#15803c" fill="none" data-name="layer1" stroke-linejoin="round"
  stroke-linecap="round"></path>
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-10'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>LinkedIn:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path
									data-name='layer2'
									d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
								></path>
								<path
									data-name='layer1'
									d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
								></path>{' '}
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-10'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>Behance:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path
									data-name='layer2'
									d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
								></path>
								<path
									data-name='layer1'
									d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
								></path>{' '}
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-10'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>Github:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path
									data-name='layer2'
									d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
								></path>
								<path
									data-name='layer1'
									d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
								></path>{' '}
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-10'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>Bank account:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path
									data-name='layer2'
									d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
								></path>
								<path
									data-name='layer1'
									d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
								></path>{' '}
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-10'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>Facebook:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path
									data-name='layer2'
									d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
								></path>
								<path
									data-name='layer1'
									d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
								></path>{' '}
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
					className='rounded-3xl shadow-2xl bg-white mx-auto md:mt-10'
				>
					<div className='p-4 md:p-12 lg:text-left text-center'>
						<h1 className='text-3xl font-bold pt-8'>Instagram:</h1>

						<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25'></div>
						<p className='pt-4 text-gray-400 text-base flex items-center justify-center lg:justify-start'>
							<svg
								className='h-4 fill-current text-green-700 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 64 64'
							>
								<path
									data-name='layer2'
									d='M58.7 11.4C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1L15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.3z'
								></path>
								<path
									data-name='layer1'
									d='M40 26.8V20a2 2 0 1 0-4 0v6.1h-8V20a2 2 0 0 0-4 0v6.8A22 22 0 0 0 8 48v12h48V48a22 22 0 0 0-16-21.2zM23 54h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm10 16h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4zm0-8h-2a2 2 0 0 1 0-4h2a2 2 0 0 1 0 4z'
								></path>{' '}
							</svg>{' '}
							0339778564
						</p>
						<p className='pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
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
				<div className='mt-5 text-center text-slate-400'>
				© Copyright owned by Greenwich Teaching Assistant Club - Danang Campus
				</div>
			</Section>
		</Page>
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

const members = [
	{
		id: 'lienntq',
		name: 'Nguyễn Thị Quỳnh Liên',
		email: 'quynhlien317@gmail.com',
		dateOfBirth: '7/31/1998',
		phone: '0898242586',
		facebookUrl: 'https://www.facebook.com/lien.quynh.12177',
		instaUrl: 'https://instagram.com/quynhlien317',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'MBbank',
		bankAccount: '0450180863107',
		image: "images/lienntq.png",
	},
	{
		id: 'vitn',
		name: 'Trần Ngọc Vĩ',
		email: 'tranngocvi.as@gmail.com',
		dateOfBirth: '12/3/2002',
		phone: '0868434850',
		facebookUrl: 'fb.com/tranngocvi.as',
		instaUrl: 'instagram.com/vtn.tranngocvi',
		linkedInUrl: 'https://www.linkedin.com/in/ngoc-vi-tran-b28752226/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Vietcombank',
		bankAccount: '1013145401',
		image: "images/"
	},
	{
		id: 'hangdvt',
		name: 'Đặng Võ Thanh Hằng',
		email: 'hiranaakira@gmail.com',
		dateOfBirth: '1/18/2000',
		phone: '0827180100',
		facebookUrl: 'https://www.facebook.com/hirana.akira.hang/',
		instaUrl: 'https://www.instagram.com/akirahirana/',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: 'https://www.behance.net/hiranaakira',
		bankAccountType: 'ABbank',
		bankAccount: '0061039959018',
		image: "images/"
	},
	{
		id: 'duyendn',
		name: 'Đỗ Ngọc Duyên',
		email: 'duyendngcd191213@fpt.edu.vn',
		dateOfBirth: '12/3/2001',
		phone: '0865658200',
		facebookUrl: 'https://www.facebook.com/ngocduyen113/',
		instaUrl: 'https://www.instagram.com/duyenngoc314/',
		linkedInUrl: '',
		githubUrl: 'https://github.com/dongocduyen',
		behanceUrl: '',
		bankAccountType: 'MBbank',
		bankAccount: '9704229201073975',
		image: "images/"
	},
	{
		id: 'chinl',
		name: 'Nguyễn Linh Chi',
		email: 'chinguyen.gdesign@gmail.com',
		dateOfBirth: '7/8/2001',
		phone: '0833251828',
		facebookUrl: 'https://www.facebook.com/itslinhchi/',
		instaUrl: 'https://www.instagram.com/itschicheese/?hl=en',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'TPbank',
		bankAccount: '03152676901',
		image: "images/"
	},
	{
		id: 'haudtk',
		name: 'Dương Thanh Kim Hậu',
		email: 'haudtk56@gmail.com',
		dateOfBirth: '6/5/2000',
		phone: '0932416974',
		facebookUrl: 'https://www.facebook.com/veeeltee/',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'VietCapital',
		bankAccount: '8007041116295',
		image: "images/"
	},
	{
		id: 'thaontt',
		name: 'Nguyễn Trần Thanh Thảo',
		email: 'Thaonttgbd201670@fpt.edu.vn',
		dateOfBirth: '10/9/2002',
		phone: '0942208477',
		facebookUrl: 'https://www.facebook.com/milonguye',
		instaUrl: '',
		linkedInUrl: 'https://www.instagram.com/_milng_/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Vietcombank',
		bankAccount: '0161001752694',
		image: "images/"
	},
	{
		id: 'tralth',
		name: 'Lê Thị Hồng Trà',
		email: 'lethihongtra02@gmail.com',
		dateOfBirth: '12/14/2002',
		phone: '0906482284',
		facebookUrl: 'https://www.facebook.com/profile.php?id=100008659123585',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Vietinbank',
		bankAccount: '105874022432',
		image: "images/"
	},
	{
		id: 'huongmt',
		name: 'Ma Thu Hương',
		email: 'huongmtgcd201620@fpt.edu.vn',
		dateOfBirth: '1/3/2003',
		phone: '0912571497',
		facebookUrl: 'https://www.facebook.com/huong.mathu.94/',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Agribank',
		bankAccount: '8309205109494',
		image: "images/"
	},
	{
		id: 'vylhk',
		name: 'Lê Hoàng Khánh Vy',
		email: 'lhkhanhvy25@gmail.com',
		dateOfBirth: '8/25/2000',
		phone: '0338925055',
		facebookUrl: 'https://www.facebook.com/lhkhanhvy25/',
		instaUrl: 'https://www.instagram.com/i.mkhvy/',
		linkedInUrl: 'https://www.linkedin.com/in/lhkhanhvy25/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Agribank',
		bankAccount: '4001205146855',
		image: "images/"
	},
	{
		id: 'chauntt',
		name: 'Nguyễn Thị Thanh Châu',
		email: 'chaunguyen2510.work@gmail.com',
		dateOfBirth: '10/25/2002',
		phone: '0783475751',
		facebookUrl: '',
		instaUrl: '',
		linkedInUrl: 'linkedin.com/in/chaunguyen2510',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: '',
		bankAccount: '',
		image: "images/"
	},
	{
		id: 'haidt',
		name: 'Đào Tấn Hải',
		email: 'haidtgcd19802@fpt.edu.vn',
		dateOfBirth: '',
		phone: '0334463258',
		facebookUrl: '',
		instaUrl: '',
		linkedInUrl: 'https://www.linkedin.com/in/daotanhai/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: '',
		bankAccount: '',
		image: "images/"
	},
	{
		id: 'chienlt',
		name: 'Lê Thành Chiến',
		email: 'chienlt17@gmail.com',
		dateOfBirth: '1/17/2000',
		phone: '0782100876',
		facebookUrl: 'https://www.facebook.com/chienlt171',
		instaUrl: 'https://www.instagram.com/lethanhchi3n/',
		linkedInUrl: 'linkedin.com/in/chienlt171',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'TPbank',
		bankAccount: '02963519001',
		image: "images/"
	},
	{
		id: 'trunghv',
		name: 'Hồ Việt Trung',
		email: 'trunghvgbd201530@fpt.edu.vn',
		dateOfBirth: '9/30/2002',
		phone: '0963815748',
		facebookUrl: 'https://www.facebook.com/9003gnurt/',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: '',
		bankAccount: '',
		image: "images/"
	},
	{
		id: 'phutx',
		name: 'Tạ Xuân Phú',
		email: 'phutxgbd201424@fpt.edu.vn',
		dateOfBirth: '1/11/2002',
		phone: '0774411805',
		facebookUrl: 'https://www.facebook.com/profile.php?id=100004141367779',
		instaUrl: 'https://www.instagram.com/_pppppppppho/?fbclid=IwAR3Vwo2GiNo0MqYsc3auyyJVdbfzBD6Loxy6QcY2nq3FL3EzxXGYuBKNjzk',
		linkedInUrl: 'https://www.linkedin.com/in/phu-ta-xuan-989518226',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'TPbank',
		bankAccount: '0406 7367 601',
		image: "images/"
	},
	{
		id: 'tuha',
		name: 'Hoàng Anh Tú',
		email: 'tus3504@gmail.com',
		dateOfBirth: '3/16/2000',
		phone: '0946000610',
		facebookUrl: 'https://www.facebook.com/profile.php?id=100010346808176',
		instaUrl: 'https://www.instagram.com/_j_hog_/',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: 'behance.net/tuhoang3',
		bankAccountType: '16032000',
		bankAccount: 'ABbank',
		image: "images/"
	},
	{
		id: 'tronglt',
		name: 'Lê Tấn Trọng',
		email: 'trongltgcd18787@fpt.edu.vn',
		dateOfBirth: '1/20/2000',
		phone: '0974863798',
		facebookUrl: '',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: 'https://github.com/tronglt20',
		behanceUrl: '',
		bankAccountType: '',
		bankAccount: '',
		image: "images/"
	},
	{
		id: 'phulqd',
		name: 'Lê Quang Đức Phú',
		email: 'Phulqdgcd191075@fpt.edu.vn',
		dateOfBirth: '2/2/2001',
		phone: '0399298001',
		facebookUrl: 'https://www.facebook.com/asdas.asdasda.5245/',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Vietcombank',
		bankAccount: '0161001695100',
		image: "images/"
	},
	{
		id: 'ngantl',
		name: 'Nguyễn Thị Lê Nga',
		email: 'ngantlgbd201665@fpt.edu.vn',
		dateOfBirth: '5/26/2002',
		phone: '0395064169',
		facebookUrl: 'https://www.facebook.com/nga.nguyenle.3',
		instaUrl: 'https://www.instagram.com/russ_vbbbee/',
		linkedInUrl: 'https://www.linkedin.com/in/nguyen-thi-le-nga-743872213/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'Vietcombank',
		bankAccount: '1012495204',
		image: "images/"
	},
	{
		id: 'nguyenndh',
		name: 'Nguyễn Đặng Hà Nguyên',
		email: 'nguyenhand2311@gmail.com',
		dateOfBirth: '11/23/2000',
		phone: '0762551557',
		facebookUrl: 'https://www.facebook.com/ha.ngieen2311/',
		instaUrl: 'https://www.instagram.com/ha.ngieen/',
		linkedInUrl: 'https://www.linkedin.com/in/nguyenhand2311/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'BIDV',
		bankAccount: '56110001119236',
		image: "images/"
	},
	{
		id: 'anhmn',
		name: 'Mai Nguyên Anh',
		email: 'anhmngbd201705@fpt.edu.vn',
		dateOfBirth: '10/3/2002',
		phone: '0367192568',
		facebookUrl: 'https://www.facebook.com/nguyenanh.mai.5477',
		instaUrl: 'https://www.instagram.com/summermckaa/',
		linkedInUrl: 'www.linkedin.com/in/mainguyenanh614259220',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'TPbank',
		bankAccount: '90367192568',
		image: "images/"
	},
	{
		id: 'nhubh',
		name: 'Bùi Hiền Như',
		email: 'hiennhu112@gmail.com',
		dateOfBirth: '1/1/2000',
		phone: '0774182385',
		facebookUrl: '',
		instaUrl: '',
		linkedInUrl: 'https://www.linkedin.com/in/hien-nhu-bui-87044418b/',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'PVcombank',
		bankAccount: '107000918456',
		image: "images/"
	},
	{
		id: 'yttm',
		name: 'Trần Thị Minh Ý',
		email: 'tranthiminhy.2001@gmail.com',
		dateOfBirth: '2/15/2001',
		phone: '0934933803',
		facebookUrl: 'https://www.facebook.com/minhy.2001',
		instaUrl: 'https://www.instagram.com/_imminhy/',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'MBbank',
		bankAccount: '0934933803',
		image: "images/"
	},
	{
		id: 'tuannd',
		name: 'Nguyễn Duy Tuấn',
		email: 'tuanndgcd191113@fpt.edu.vn',
		dateOfBirth: '2/20/2001',
		phone: '0961135481',
		facebookUrl: 'https://www.facebook.com/Tuan20022001',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: 'https://github.com/tuannd20',
		behanceUrl: '',
		bankAccountType: 'Agribank',
		bankAccount: '3707205173474',
		image: "images/"
	},
	{
		id: 'lamhtk',
		name: 'Huỳnh Thị Kim Lâm',
		email: 'lamhtkgcd201561@fpt.edu.vn',
		dateOfBirth: '7/22/2001',
		phone: '0918081811',
		facebookUrl: 'https://www.facebook.com/profile.php?id=100052980249707',
		instaUrl: 'https://www.instagram.com/flora.22.07/',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: 'TPbank',
		bankAccount: '03562584001',
		image: "images/"
	},
	{
		id: 'huytq',
		name: 'Trần Quang Huy',
		email: 'supermido@gmail.com',
		dateOfBirth: '1/16/1996',
		phone: '0795541090',
		facebookUrl: 'https://www.facebook.com/huy.mido',
		instaUrl: '',
		linkedInUrl: '',
		githubUrl: '',
		behanceUrl: '',
		bankAccountType: '',
		bankAccount: '',
		image: "images/"
	},
]
