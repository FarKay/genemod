function BlogPost() {
  return (
    <div className="sm:flex sm:flex-col sm:gap-2 rounded-2xl bg-[#f5f7ff] border border-[#eff1f5] p-2 md:bg-[#fbfbfa] md:border-none md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-8">
      <div className="md:border md:rounded-2xl md:bg-[#f5f7ff] md:p-2 md:flex md:flex-col md:col-span-2 md:gap-4 md:border-[#eff1f5] shadow-custom-2 lg:w-[392px] lg:col-auto">
        <div>
          <img
            src="/desktop/blog-image.png"
            alt="science-lab"
            className="md:w-full md:h-[256px]"
          />
        </div>
        <div className="flex flex-col p-2 gap-3 md:justify-between">
          <div className="md:flex md:flex-col md:gap-3">
            <h4 className="font-semibold font-lato text-base text-[#020d3b] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
              Scientific discoveries unveiled: Exploring the wonders of the
              universe
            </h4>
            <span className="font-normal font-lato text-[14px] leading-[21px] text-[#4a5578] md:text-[15px] md:leading-[22.5px] md:max-w-[642px] lg:text-base">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
          <div>
            <span className="font-normal font-lato text-[12px] leading-[18px] text-[#4a5578] lg:text-[13px] lg:leading-[19.5px]">
              January 1, 2023
            </span>
          </div>
        </div>
      </div>

      <div className="md:border md:rounded-2xl md:bg-[#f5f7ff] md:p-2 md:flex md:flex-col md:gap-4 md:border-[#eff1f5] shadow-custom-2 lg:w-[392px] sm:hidden">
        <div>
          <img src="/desktop/blog-image.png" alt="science-lab" />
        </div>
        <div className="flex flex-col p-2 gap-3 md:justify-between">
          <div className="md:flex md:flex-col md:gap-3">
            <h4 className="font-semibold font-lato text-base text-[#020d3b] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
              Scientific discoveries unveiled: Exploring the wonders of the
              universe
            </h4>
            <span className="font-normal font-lato text-[14px] leading-[21px] text-[#4a5578] md:text-[15px] md:leading-[22.5px] md:overflow-hidden md:whitespace-nowrap md:text-ellipsis lg:text-base lg:overflow-visible lg:whitespace-normal">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
          <div>
            <span className="font-normal font-lato text-[12px] leading-[18px] text-[#4a5578] lg:text-[13px] lg:leading-[19.5px]">
              January 1, 2023
            </span>
          </div>
        </div>
      </div>

      <div className="md:border md:rounded-2xl md:bg-[#f5f7ff] md:p-2 md:flex md:flex-col md:gap-4 md:border-[#eff1f5] shadow-custom-2 lg:w-[392px] sm:hidden">
        <div>
          <img src="/desktop/blog-image.png" alt="science-lab" />
        </div>
        <div className="flex flex-col p-2 gap-3 md:justify-between">
          <div className="md:flex md:flex-col md:gap-3">
            <h4 className="font-semibold font-lato text-base text-[#020d3b] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
              Scientific discoveries unveiled: Exploring the wonders of the
              universe
            </h4>
            <span className="font-normal font-lato text-[14px] leading-[21px] text-[#4a5578] md:text-[15px] md:leading-[22.5px] md:overflow-hidden md:whitespace-nowrap md:text-ellipsis lg:text-base lg:overflow-visible lg:whitespace-normal">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
          <div>
            <span className="font-normal font-lato text-[12px] leading-[18px] text-[#4a5578] lg:text-[13px] lg:leading-[19.5px]">
              January 1, 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
