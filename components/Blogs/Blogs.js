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
    <section className="px:10 md:px-20 lg:px-40 pb-20">
      <div className="flex justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
          Bookworm Blogs
        </h2>
        <button className="bg-indigo-900 hover:bg-indigo-800 inline-block text-white rounded-full text-md px-5 py-1 font-semibold">
          Read all Blogs
        </button>
      </div>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
