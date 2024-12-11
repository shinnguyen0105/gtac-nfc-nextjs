import { useState } from 'react';
import Link from 'next/link';
import Page from '../components/page';
import Section from '../components/section';
import members from '../public/data/data';

const Members = () => {
	const [searchTerm, setSearchTerm] = useState('');

	// Lọc danh sách thành viên dựa trên giá trị tìm kiếm
	const filteredMembers = members.filter((member) =>
		member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		member.phone.includes(searchTerm) ||
		member.email.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold text-white'>GTAC MEMBERCARD</h2>
				<br />
				{/* Thanh tìm kiếm */}
				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search by name, phone, or email'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full p-2 border border-gray-300 rounded-md text-white'
					/>
				</div>
				<br />
				{/* Danh sách thành viên */}
				<div className='mt-2'>
					{/* Chỉ hiển thị danh sách khi có từ khóa tìm kiếm */}
					{searchTerm ? (
						<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
							{filteredMembers.map((member) => (
								<Link key={member.id} href='/[mid]' as={`/${member.id}`} passHref>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="rounded overflow-hidden bg-inherit hover:shadow-2xl"
								>
									<img
										className="w-full"
										src={`images/${member.id}.png`}
										alt={`${member.name}`}
									/>
									<div className="font-bold text-sm mb-2 text-white">{member.name}</div>
									<p className="text-slate-200 text-xs">Phone: {member.phone}</p>
									<p className="text-slate-200 text-xs">Email: {member.email}</p>
								</a>
							</Link>
							))}
						</div>
					) : (
						<p className='text-center text-slate-400 mt-4'>
							Enter a search term to display members.
						</p>
					)}
					{/* Hiển thị thông báo nếu không tìm thấy kết quả */}
					{searchTerm && filteredMembers.length === 0 && (
						<p className='text-center text-slate-400 mt-4'>
							No members found.
						</p>
					)}
				</div>
				<br />
				<div className='mt-5 text-center text-slate-400'>
					© Copyright owned by Greenwich Teaching Assistant Club - Danang Campus
				</div>
			</Section>
		</Page>
	);
};

export default Members;