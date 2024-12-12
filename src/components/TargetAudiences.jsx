/* eslint-disable react/prop-types */
function TargetAudiences({ data }) {
  return (
    <div className="md:grid md:grid-cols-2 sm:flex">
      <div className="md:py-[60px] lg:py-[60px] lg:pl-20 lg:pr-20 sm:hidden md:flex">
        {/* <img src="/tab/image.png" alt="image" className="lg:hidden" /> */}
        <img src={data.image} alt="image" className="sm:hidden lg:block" />
      </div>
      <div className="flex flex-col sm:justify-between px-6 py-8 md:py-[60px] lg:max-w-[710px]">
        <div className="flex flex-col gap-4 sm:justify-between">
          <h2 className="font-medium font-cabin text-[24px] leading-[26.88px] text-brand-500 md:text-[31px] md:leading-[34.72px] lg:text-[33px] lg:leading-[36.96px]">
            {data.title}
          </h2>
          <p className="font-normal font-lato text-[16px] leading-[24px] text-[#7d89b0] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            {data.description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-normal font-lato text-[14px] leading-[21px] text-[#7d89b0] md:text-[15px] md:leading-[22.5px] lg:text-base">
              #Drug Discovery
            </span>
            <span className="font-normal font-lato text-[14px] leading-[21px] text-[#7d89b0] md:text-[15px] md:leading-[22.5px] lg:text-base">
              #Therapeutic R&D
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 py-2 lg:gap-4">
            <div className="lg:px-3">
              <span className="font-semibold font-lato text-[16px] leading-[24px] text-[#051d85] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
                For innovations
              </span>
            </div>
            <div>
              <img src="/design/arrow-right.png" alt="arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TargetAudiences;
