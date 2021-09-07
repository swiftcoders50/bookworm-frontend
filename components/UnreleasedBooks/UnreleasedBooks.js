import React from 'react';
import Link from 'next/link';
import UnreleasedBookCarousel from '../UnreleasedBookCarousel/UnreleasedBookCarousel';

const UnreleasedBooks = () => {
	// demo array of books
	const bestBooks = [
		{
			id: 1,
			name: 'Hate kolome javascript',
			author: 'Zonayed Ahmed',
			price: 42,
			img: '/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg',
		},
		{
			id: 2,
			name: 'Eloquent-javascript',
			author: 'Marijn Haverbake',
			price: 50,
			img: '/assets/book-images/eloquent-javascript.jpg',
		},

		{
			id: 4,
			name: 'Computer Programming',
			author: 'Subeen',
			price: 70,
			img: '/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg',
		},
		{
			id: 5,
			name: 'Recharge your down battery',
			author: 'Jhankar Mahbub',
			price: 50,
			img: '/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg',
		},
		{
			id: 6,
			name: 'Computer Programming',
			author: 'Subeen',
			price: 70,
			img: '/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg',
		},
		{
			id: 7,
			name: 'Recharge your down battery',
			author: 'Jhankar Mahbub',
			price: 50,
			img: '/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg',
		},
	];

	return (
		<div className='my-20'>
			<div className='mx-2 sm:mx-4 md:mx-16'>
				<div className='flex justify-between my-8 border-b border-gray-200'>
					<h1 className='text-2xl md:text-3xl font-semibold text-indigo-900'>
						Unreleased Books
					</h1>
					<Link href='/'>
						<a className='text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-semibold'>
							View All
						</a>
					</Link>
				</div>
			</div>
			{/* unreleased books carousel */}
			<div className='bg-indigo-900 p-16'>
				<UnreleasedBookCarousel bestBooks={bestBooks} />
			</div>
		</div>
	);
};

export default UnreleasedBooks;
