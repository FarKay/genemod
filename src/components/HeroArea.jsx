import Button from "./Button";

function HeroArea() {
  return (
    <div className="md:grid md:grid-cols-2 mt-[72px]">
      <div className=" bg-[#f2eefc] w-full">
        <div className="max-w-[700px] ml-auto">
          <div className="px-6 pb-10 pt-[60px] flex flex-col gap-8 md:pb-[60px] md:px-10 lg:py-[120px] lg:px-20 bg-[#f2eefc]">
            <div className="flex flex-col gap-4">
              <h1 className="text-brand-500 text-center text-[37px] font-medium leading-[41.44px] font-cabin md:text-[54px] md:leading-[60.48px] md:text-left lg:text-[58px] lg:leading-[64.96px]">
                Optimize Today, <br></br> Scale for Tomorrow
              </h1>
              <p className="text-[#404968] font-normal font-lato text-[18px] leading-[27px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] md:text-[22px] md:leading-[33px] md:text-left lg:text-[23px] lg:leading-[34.5px]">
                The LIMS and ELN for High-Performing Teams
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <Button type="primary">Request demo</Button>
              <Button type="secondary">Sign up free</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fff] md:flex md:justify-center md:items-center">
        <div className="max-w-[700px] mr-auto">
          <div className="px-1 lg:px-4 bg-[#fff]">
            <img
              src="/desktop/Freezer graphical video.png"
              alt="freezer-graphical-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;
