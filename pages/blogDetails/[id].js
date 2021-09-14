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
        <img
          className="h-96 w-full rounded"
          src="/assets/blog-images/blog-2.jpg"
          alt=""
        />
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

// {/* <div className="antialiased bg-gray-100 pt-20  sm:pb-0 pb-24 lg:pb-18">
// <div className="flex w-full min-h-screen justify-center items-center">
//   <div className="flex  flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-indigo-900 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
//     {/* Details */}
//     <div className="flex flex-col space-y-8 justify-between">
//       <div>
//         <h1 className="font-bold text-4xl tracking-wide">Details</h1>
//         <p className="pt-2 text-white text-sm">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
//           rerum temporibus magnam!
//         </p>
//       </div>
//       {/*More details */}
//       <div className="flex flex-col space-y-6">
//         <div className="inline-flex space-x-2 items-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
//           voluptatum.
//         </div>

//         <div className="inline-flex space-x-2 items-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Tempore, ipsam.
//         </div>

//         <div className="inline-flex space-x-2 items-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
//           impedit!
//         </div>
//       </div>
//       <div className="flex space-x-4 text-lg">
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
//         aperiam exercitationem deserunt saepe quas earum. Voluptates sit
//         magnam a dolorem optio. Animi, tempore repellendus! Eveniet amet
//         eligendi ipsum incidunt aliquid.
//       </div>
//     </div>

//     {/* blog img */}
//     <div className="relative">
//       <div className="bg-white rounded-xl shadow-lg p-8 text-indigo-900 md:w-80">
//         <div className="flex flex-col space-y-4">
//           <img
//             className="mb-28"
//             style={{ height: "250px" }}
//             src="https://i.ibb.co/r06Syjg/blog-1.jpg"
//             alt=""
//           />
//         </div>
//         <span className="text-3xl">Title:.....</span>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}
