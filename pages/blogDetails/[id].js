import { useRouter } from "next/router";
import { useContext } from "react";
import { BlogContext } from "../_app";

const blogDetails = () => {
  const [blogData, setBlogData] = useContext(BlogContext);
  const router = useRouter();
  const { id } = router.query;

  const newBlogData = blogData.find((data) => data.id == id);
  console.log(newBlogData);

  return (
    <div className="pt-48 pb-32 flex  px-10 py-10 justify-center items-center">
      <div className="rounded overflow-hidden shadow-md">
        <img className="h-96 w-full rounded" src={newBlogData?.img} alt="" />
        {/* description */}
        <div className="px-5 pb-7 space-y-5 text-indigo-900 font-bold bg-gray-100 pt-5">
          <div>
            <span className="text-lg">ID : {newBlogData?.id} </span>
          </div>
          <div>
            <span className="text-lg">NAME : {newBlogData?.name} </span>
          </div>
          <div>
            <span className="text-lg">TITLE : {newBlogData?.title} </span>
          </div>
          <div>
            <span className="text-lg">DESCRIPTION : {newBlogData?.text} </span>
          </div>
          <div>
            <span className="text-lg">DATE : {newBlogData?.date} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogDetails;
