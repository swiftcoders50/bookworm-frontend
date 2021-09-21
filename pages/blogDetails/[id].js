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
        <span className="text-4xl text-black font-bold">
          {newBlogData?.title}
        </span>

        <div className="flex items-center pb-5 pt-3">
          <FaCalendar className="text-black" />
          <span className="text-lg text-black pl-2">{newBlogData?.date}</span>
        </div>

        {/* this is picture */}
        <img
          className="h-96 md:w-9/12 w-full rounded"
          src={newBlogData?.img}
          alt=""
        />

        {/* description */}
        <div className="mt-8 text-justify">
          <div className="flex items-center">
            <FaEdit className="text-black" />
            <span className="text-lg pl-2 text-black font-bold">
              {newBlogData?.name}
            </span>
          </div>
          <div>
            <span className="text-lg text-gray-500 font-bold">
              {newBlogData?.text}
            </span>
          </div>

          <div className="text-lg text-gray-500 font-bold mb-8 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi
            iusto eaque in optio, quidem officiis ipsa id ullam? Perferendis
            ipsam repellat sapiente expedita molestias atque velit veritatis,
            rerum dolore sit? Illum magni alias modi laborum amet dolorum,
            laboriosam suscipit beatae temporibus inventore recusandae officiis
            cumque quidem aperiam vel id!
          </div>

          <div className="text-lg text-gray-500 font-bold mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            nisi est molestiae natus aperiam officia voluptates corrupti iusto
            labore, voluptate corporis officiis voluptatum a beatae vitae quo
            assumenda modi minima eos aspernatur quisquam, optio repellendus,
            sit architecto. Nihil quis eveniet officiis commodi illum eligendi
            repellat sed mollitia quas voluptate vitae odio, qui inventore totam
            iure iusto laudantium alias expedita incidunt cum illo. Delectus
            vero enim veritatis magni porro esse dignissimos voluptatibus quod
            repudiandae quia! Error sunt veniam itaque sequi, ipsam non!
            Necessitatibus ab sit sequi maxime odit. Numquam, repellat qui.
          </div>

          <div className="text-lg text-gray-500 font-bold mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            aperiam odit debitis voluptas expedita accusantium corrupti
            cupiditate ipsam perspiciatis hic! A possimus unde velit nam tempore
            soluta excepturi consequatur, ducimus corporis dolore esse
            exercitationem adipisci nisi tenetur. Iusto minima ea magni ratione
            exercitationem nihil unde eum ducimus? Voluptate exercitationem, hic
            sapiente magni odit fugit similique! Provident ipsam sint quo.
            Mollitia, minima tempora quod rerum sed, exercitationem corporis,
            ducimus aut numquam amet sequi maxime? Itaque repudiandae aspernatur
            assumenda commodi explicabo quo.
          </div>
        </div>
        {/* end Description */}
      </div>
    </div>
  );
};

export default blogDetails;
