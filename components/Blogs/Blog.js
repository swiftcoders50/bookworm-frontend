import { FaRegCalendarAlt } from 'react-icons/fa';
const Blog = ({blog}) => {
    return (
        <div>
            <img className="h-2/4 w-full object-cover mb-3"
				src={blog.img}
				alt={blog.name}
			/>
            <h4><b>By {blog.name}</b></h4>
            
            <div className="flex gap-2">
            <FaRegCalendarAlt className='mt-1 cursor-pointer' size='1rem' color='gray' />
            <h4>{blog.date}</h4>
            </div>
            <h4 className="text-xl my-3"><b>{blog.title}</b></h4>
            <p>{blog.text}</p>
            <button className="bg-indigo-900 hover:bg-indigo-800 inline-block text-white rounded-full text-md px-5 py-1 my-3 font-semibold">Read More</button>
        </div>
    );
};

export default Blog;