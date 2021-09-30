import { useRouter } from "next/router";
import { useContext } from "react";
import { FaBookOpen, FaClock, FaEdit, FaCalendar } from "react-icons/fa";
import { BlogContext } from "../_app";

const blogDetails = () => {
  const [blogData, setBlogData] = useContext(BlogContext);
  const router = useRouter();
  const { id } = router.query;

  const newBlogData = blogData.find((data) => data.id == id);

  return (
    <div className="pt-24 px-10 md:px-52">
      <div>
        <span className="text-3xl text-indigo-900 font-semibold">
          {newBlogData?.title}
        </span>

        <div className="flex items-center pb-5 pt-3">
          <FaCalendar className="text-gray-600" size="1.2rem" />
          <span className="text-lg text-gray-600 pl-2">
            {newBlogData?.date}
          </span>
        </div>

        {/* this is picture */}
        <img
          className="h-96 md:w-9/12 lg:w-screen w-full rounded"
          src={newBlogData?.img}
          alt=""
        />

        {/* description */}
        <div className="mt-8 text-justify">
          <div className="flex items-center">
            <FaEdit className="text-gray-600" size="1.2rem" />
            <span className="text-lg pl-2 text-gray-700 font-bold">
              {newBlogData?.name}
            </span>
          </div>
          <div>
            <span className="text-lg text-gray-700">{newBlogData?.text}</span>
          </div>

          <div className="text-lg text-gray-700  mb-8 mt-10">
            A professor at the University of Minnesota, blogger John Pistelli
            holds a PhD in English literature; he has published several works of
            fiction and poetry, including a novel (Portraits and Ashes). The
            thoughtful, artful articles and musings he shares with his followers
            aren't driven by hot topics or current events—they are anchored by
            his personal interests in classic and contemporary fiction. This
            book review blog features poetry, drama, and nonfiction, along with
            works of various other genres. Readers can look forward to
            approximately one new review per week.
          </div>

          <div className="flex items-center">
            <FaEdit className="text-gray-600" size="1.2rem" />
            <span className="text-lg pl-2 text-gray-700 font-bold">
              Books changed my ideology
            </span>
          </div>

          <div className="text-lg text-gray-700  mb-8">
            Blogger Susan Osborne has done it all—she has worked in book sales,
            as a writer, and as a magazine editor. As she puts it, her aims are
            to "select snippets of book news that interest [her], talk about
            some of the books [she's] just read and alert readers to titles that
            might not find themselves in the glare of the publicity spotlight."
            Look to this blog for topical book news, thoughtful reviews,
            lovingly selected recommendations, and other musings of a woman
            happily mired in the world of literature.
          </div>

          <div className="flex justify-around">
            <img
              className="h-54 w-94"
              src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcnklMjBib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          <div className="flex items-center mt-5">
            <FaEdit className="text-gray-600" size="1.2rem" />
            <span className="text-lg pl-2 text-gray-700 font-bold">
              Our favourite books of 2021
            </span>
          </div>

          <div className="text-lg text-gray-700  mb-8">
            This blog features "curated collections of the best stories this
            planet has to offer." You will get lost scrolling through the
            available posts promising content such as "50 Subgenres and Their
            Must-Reads." Their posts follow trending, relevant topics in the
            literary world with a dash of lifestyle on the side. Their site also
            includes lists of book recommendations and newly published works
            just waiting to be discovered.
          </div>
        </div>
        {/* end Description */}
      </div>
    </div>
  );
};

export default blogDetails;
