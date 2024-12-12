import BlogPost from "./BlogPost";
import Heading from "./Heading";

function Blog() {
  return (
    <div className="py-10 px-6 bg-[#fbfbfa] flex flex-col gap-6 md:py-[60px] md:px-20 md:gap-10 lg:py-[60px] lg:px-20">
      <div className="flex flex-col gap-6">
        <div className="md:px-20">
          <Heading className="font-medium font-cabin text-[32px] leading-[35.84px] text-center md:text-[45px] md:leading-[50.4px] lg:text-[48px] lg:leading-[53.76px]">
            Stay ahead with the latest trends
          </Heading>
        </div>
        <BlogPost />
      </div>
      <div className="flex py-3 gap-4 justify-center items-center md:hidden">
        <img src="/design/dot 1.png" alt="dot" />
        <img src="/design/dot 6.png" alt="dot" />
        <img src="/design/dot 7.png" alt="dot" />
      </div>
      <div className="flex gap-3 p-2 justify-center items-center">
        <button className="px-3 font-semibold font-lato text-[19px] leading-[28.5px] text-[#020d3b]">
          Read more blogs
        </button>
        <img
          src="/design/arrow-right-2.png"
          alt="arrow-right"
          className="w-[16.33px] h-[16.33px]"
        />
      </div>
    </div>
  );
}

export default Blog;
