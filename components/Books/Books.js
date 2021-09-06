import React from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

const Books = ({ book }) => {
	return (
		<div key={book.id} className='mx-auto rounded-md shadow-md overflow-hidden'>
			<div className='md:flex h-auto md:h-48'>
				<div className='flex sm:flex-shrink-0 justify-center'>
					<img
						className='h-48 md:h-full w-full object-cover'
						src={book.img}
						alt={book.name}
					/>
				</div>
				<div className='p-2 md:p-3'>
					<h2 className='text-xl text-indigo-900 font-semibold'>{book.name}</h2>
					<p className='font-semibold text-md text-gray-600 my-2'>
						{book.author}
					</p>
					<h3 className='text-xl font-bold text-indigo-700 my-2'>
						${book.price}
					</h3>
					<div className='flex items-center justify-between'>
						<Link href='/'>
							<a>
								<button className='bg-indigo-900 hover:bg-indigo-800 inline-block text-white rounded-full text-md px-5 py-1 font-semibold'>
									Buy Now
								</button>
							</a>
						</Link>
						{/* icon */}
						<FaHeart size='1.2rem' color='gray' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Books;
