import React from 'react';
import Books from '../Books/Books';

const BestSeller = () => {
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
	];

	return (
		// best seller container
		<div className='mx-2 sm:mx-4 md:mx-16'>
			<div className='text-center md:text-left my-4'>
				<h1 className='text-3xl font-semibold text-indigo-900 border-b border-gray-200 pb-2'>
					Best Seller Books
				</h1>
			</div>
			{/* best seller Cart container */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4'>
				{/* cart */}
				{bestBooks.map((book) => (
					<Books key={book.id} book={book} />
				))}
			</div>
		</div>
	);
};

export default BestSeller;
