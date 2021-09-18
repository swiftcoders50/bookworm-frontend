import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Categories = () => {
	// dynamic array of categories
	const categories = [
		{
			id: 1,
			img: "/assets/categories/stats.svg",
			category: "Business & Finance",
			subInfo: "Books about Business World",
		},
		{
			id: 2,
			img: "/assets/categories/career.svg",
			category: "Self Improvement",
			subInfo: "Books for Motivation Yourself",
		},
		{
			id: 3,
			img: "/assets/categories/books.svg",
			category: "Novel Telenovela",
			subInfo: "Books about Great Story",
		},
		{
			id: 4,
			img: "/assets/categories/skill.svg",
			category: "Skill in Future",
			subInfo: "Books for Self Preparation",
		},
	];
	return (
		<div className="my-20">
			<div className="mx-3 sm:mx-4 md:mx-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
					{categories.map((category) => (
						<div
							key={category.id}
							className="w-full p-5 text-center border rounded-lg"
						>
							<div className="flex justify-center mb-5">
								<div className="p-2 h-16 w-16 bg-gray-100 rounded-full overflow-hidden">
									<img src={category.img} alt={category.category} />
								</div>
							</div>
							<div>
								<h3 className="mb-3 text-gray-800 text-xl font-medium">
									{category.category}
								</h3>
								<p className="text-md text-gray-500">{category.subInfo}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
