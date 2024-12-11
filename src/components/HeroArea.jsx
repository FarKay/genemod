function HeroArea() {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className=" bg-[#f2eefc] pt-[60px] px-6 pb-10 flex flex-col gap-8 md:py-[60px] md:px-10 lg:py-[120px] lg:px-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-brand-500 text-center text-[37px] font-medium leading-[41.44px] font-cabin md:text-[54px] md:leading-[60.48px] md:text-left lg:text-[58px] lg:leading-[64.96px]">
            Optimize Today, <br></br> Scale for Tomorrow
          </h1>
          <p className="text-[#404968] font-normal font-lato text-[18px] leading-[27px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] md:text-[22px] md:leading-[33px] md:text-left lg:text-[23px] lg:leading-[34.5px]">
            The LIMS and ELN for High-Performing Teams
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <button className="w-full md:w-[147px] bg-brand-500 text-[#fff] p-2 rounded-[4px] font-lato font-semibold text-[18px] leading-[27px] [text-underline-position:from-font] [text-decoration-skip-ink:none] lg:text-[19px] lg:leading[28.5px]">
            Request demo
          </button>
          <button className="w-full md:w-[127px] rounded-[4px] p-2 border border-brand-500 text-brand-500 font-lato font-semibold text-[18px] leading-[27px] [text-underline-position:from-font] [text-decoration-skip-ink:none] lg:text-[19px] lg:leading[28.5px]">
            Sign up free
          </button>
        </div>
      </div>
      <div className="px-1 md:flex md:justify-center md:items-center bg-[#fff] lg:px-4">
        <img
          src="/desktop/Freezer graphical video.png"
          alt="freezer-graphical-video"
        />
      </div>
    </div>
  );
}

export default HeroArea;
