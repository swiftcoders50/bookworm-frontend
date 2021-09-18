import { useContext, useEffect } from "react";
import { BlogContext } from "../../pages/_app";
import Blog from "./Blog";
const Blogs = () => {
	const blogs = [
		{
			id: 1,
			name: "Ramamoorthi M",
			date: "July 5, 2021",
			title: "Books changed my ideology",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit ligula id erat accumsan eleifend ut ac metus. Aliquam nec arcu et felis tincidunt vestibulum et eget ante. ",
			img: "/assets/blog-images/blog-1.jpg",
		},
		{
			id: 2,
			name: "Ramamoorthi M",
			date: "July 5, 2021",
			title: "Best writers of 19th century",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit ligula id erat accumsan eleifend ut ac metus. Aliquam nec arcu et felis tincidunt vestibulum et eget ante. ",
			img: "/assets/blog-images/blog-2.jpg",
		},
		{
			id: 3,
			name: "Ramamoorthi M",
			date: "July 5, 2021",
			title: "My favourite books of 2021",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit ligula id erat accumsan eleifend ut ac metus. Aliquam nec arcu et felis tincidunt vestibulum et eget ante. ",
			img: "/assets/blog-images/blog-3.jpg",
		},
	];
	//context api for the blog
	const [blogData, setBlogData] = useContext(BlogContext);

	useEffect(() => {
		setBlogData(blogs);
	}, []);

	// console.log(blogData);

	return (
		<section className="mx-3 sm:mx-4 md:mx-16">
			<div className="flex justify-between my-8 border-b border-gray-200">
				<h1 className="font-oswald text-xl md:text-2xl font-medium text-indigo-900">
					Bookworm Blogs
				</h1>
				{/* <Link href="/">
					<a className="font-oswald text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-medium">
						View All
					</a>
				</Link> */}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14">
				{blogs.map((blog) => (
					<Blog key={blog.id} blog={blog}></Blog>
				))}
			</div>
		</section>
	);
};

export default Blogs;
