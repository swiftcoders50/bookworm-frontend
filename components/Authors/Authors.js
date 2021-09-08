import React from 'react';
import Link from 'next/link';
import AuthorsCarousel from '../AuthorsCarousel/AuthorsCarousel';

const Authors = () => {
	// demo array of authors
	const authors = [
		{
			id: 1,
			img: '/assets/author-images/author-1.jpg',
		},
		{
			id: 2,
			img: '/assets/author-images/author-2.jpg',
		},
		{
			id: 4,
			img: '/assets/author-images/author-3.jpg',
		},
		{
			id: 5,
			img: '/assets/author-images/author-4.jpg',
		},
		{
			id: 6,
			img: '/assets/author-images/author-1.jpg',
		},
		{
			id: 7,
			img: '/assets/author-images/author-2.jpg',
		},
	];
	return (
		<div className='my-20'>
			<div className='mx-2 sm:mx-4 md:mx-16'>
				<div className='flex justify-between my-8 border-b border-gray-200'>
					<h1 className='text-2xl md:text-3xl font-semibold text-indigo-900'>
						Weekly Top Authors
					</h1>
					<Link href='/'>
						<a className='text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-semibold'>
							View All
						</a>
					</Link>
				</div>
			</div>
			{/* authors carousel */}
			<div className='bg-indigo-900 p-16'>
				<AuthorsCarousel authors={authors} />
			</div>
		</div>
	);
};

export default Authors;
