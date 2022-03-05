import Page from '../../components/page'
import Section from '../../components/section'

const Member = ({ member }) => {
	return (
		<Page>
			<Section>
				{member ? (
					<>
						{' '}
						<img src={member.image} />
						<h2 className='text-xl font-semibold mt-5'>
							{member ? member.title : ''}
						</h2>
						<div className='mt-2'>
							<p className='text-zinc-600 dark:text-zinc-400'>
								{member ? member.content : ''}
							</p>
							<br />
							<p className='text-sm text-zinc-600 dark:text-zinc-400'>
								<a
									href='https://twosentencestories.com/vision'
									className='underline'
								>
									Vision
								</a>
								, a two sentence story
							</p>{' '}
						</div>
					</>
				) : (
					<></>
				)}
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
		id: '1',
		image: '/images/1.jpg',
		title: '[Tết Nguyên Đán - Tết cổ truyền của dân tộc Việt Nam]',
		content:
			'🧧Trải qua bao mùa quất nhưng chắc hẳn nhiều bạn vẫn chưa biết tại sao dân ta lại gọi là Tết Nguyên Đán hay là Tết Nhâm Dần phải không nào? Cùng GNews tìm hiểu nhé! \n#GNewsClub2022',
	},
	{
		id: '2',
		image: '/images/ios.png',
		title: '[Tết Nguyên Đán - Tết cổ truyền của dân tộc Việt Nam]',
		content:
			'🧧Trải qua bao mùa quất nhưng chắc hẳn nhiều bạn vẫn chưa biết tại sao dân ta lại gọi là Tết Nguyên Đán hay là Tết Nhâm Dần phải không nào? Cùng GNews tìm hiểu nhé! \n#GNewsClub2022',
	},
	{
		id: '3',
		image: '/images/macos.png',
		title: '[Tết Nguyên Đán - Tết cổ truyền của dân tộc Việt Nam]',
		content:
			'🧧Trải qua bao mùa quất nhưng chắc hẳn nhiều bạn vẫn chưa biết tại sao dân ta lại gọi là Tết Nguyên Đán hay là Tết Nhâm Dần phải không nào? Cùng GNews tìm hiểu nhé! \n#GNewsClub2022',
	},
]
