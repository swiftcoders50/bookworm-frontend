import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
const Blog = ({ blog }) => {
	return (
		<div className="shadow bg-gray-50 p-2">
			<div className="h-auto overflow-hidden">
				<img
					className="w-full cursor-pointer object-cover transition duration-1000 ease-in-out transform hover:scale-125"
					src={blog.img}
					alt={blog.name}
				/>
			</div>
			<h4 className="text-gray-800 mt-3">
				<b>By {blog.name}</b>
			</h4>

			<div className="flex items-center gap-2">
				<FaRegCalendarAlt className="cursor-pointer" size="1rem" color="gray" />
				<h4 className="text-gray-500">{blog.date}</h4>
			</div>
			<h4 className="text-xl text-gray-800 my-3">
				<b>{blog.title}</b>
			</h4>
			<p className="text-gray-800">{blog.text}</p>
			<Link href={"/blogDetails/" + blog.id}>
				<a>
					<button className="bg-indigo-900 active:bg-indigo-800 inline-block text-white rounded-full text-md px-5 py-1 my-4 font-medium focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
						Read More
					</button>
				</a>
			</Link>
		</div>
	);
};

export default Blog;
