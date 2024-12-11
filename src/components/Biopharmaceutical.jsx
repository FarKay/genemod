function Biopharmaceutical() {
  return (
    <div className="bg-[#f5f7ff] py-10">
      <div className="flex flex-row pl-6 overflow-x-clip gap-5 md:px-10 md:pt-5 md:justify-center md:flex-wrap sm:flex-nowrap lg:gap-10 sm:whitespace-nowrap">
        <div className="py-[2px] font-semibold font-lato text-[16px] leading-6 text-[#2c52f7] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
          Biopharmaceutical
          <hr className="border-none bg-[#2c52f7] h-[2px]" />
        </div>
        <div className="py-[2px] font-normal font-lato text-[16px] leading-6 text-[#7d89b0] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
          Industrial biotech
          <hr className="border-none bg-[#eff1f5] h-[2px]" />
        </div>
        <div className="py-[2px] font-normal font-lato text-[16px] leading-6 text-[#7d89b0] overflow-x-clip md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
          Biorepository
          <hr className="border-none bg-[#eff1f5] h-[2px]" />
        </div>
        <div className="py-[2px] font-normal font-lato text-[16px] leading-6 text-[#7d89b0] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
          Clinical research
          <hr className="border-none bg-[#eff1f5] h-[2px]" />
        </div>
        <div className="py-[2px] font-normal font-lato text-[16px] leading-6 text-[#7d89b0] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
          Biomanufacturing
          <hr className="border-none bg-[#eff1f5] h-[2px]" />
        </div>
        <div className="py-[2px] font-normal font-lato text-[16px] leading-6 text-[#7d89b0] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
          Contact services
          <hr className="border-none bg-[#eff1f5] h-[2px]" />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 sm:flex">
        <div className="md:py-[60px] lg:py-[60px] lg:pl-20 lg:pr-20 sm:hidden md:flex">
          <img src="/tab/image.png" alt="image" className="lg:hidden" />
          <img
            src="/desktop/bio-image.png"
            alt="image"
            className="sm:hidden lg:block"
          />
        </div>
        <div className="flex flex-col sm:justify-between px-6 py-8 md:py-[60px] lg:max-w-[710px]">
          <div className="flex flex-col gap-4 sm:justify-between">
            <div>
              <h2 className="font-medium font-cabin text-[24px] leading-[26.88px] text-brand-500 md:text-[31px] md:leading-[34.72px] lg:text-[33px] lg:leading-[36.96px]">
                Integrated solutions for biopharma R&D decision-making
              </h2>
              <p className="font-normal font-lato text-[16px] leading-[24px] text-[#7d89b0] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
                Embrace an efficient R&D solution tailored specifically for
                biopharma. Our platform seamlessly integrates swift lead
                identification with informed decision-making, bolstered by tools
                that foster team collaboration. It&apos;s an elevated approach
                to R&D, blending practicality with actionable insights.
              </p>
            </div>
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
    </div>
  );
}

export default Biopharmaceutical;
