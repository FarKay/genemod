function Roi() {
  return (
    <div className="px-6">
      <hr />
      <div className="flex flex-col gap-[15px] py-10 bg-[#fbfbfa] md:py-[60px] md:px-[40px] md:gap-[38px] lg:flex-row lg:gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 px-[12px] md:px-6">
            <h2 className="font-medium text-[28px] text-brand-500 font-cabin md:text-[37px] leading-[41.44px] lg:text-[40px] lg:leading-[44.8px]">
              77%
            </h2>
            <p className="font-normal font-lato text-[18px] leading-[27px] text-[#4a5578] text-left md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px] [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Reduce operating costs
            </p>
            <p className="text-[14px] font-normal font-lato leading-[21px]  text-[#4a5578] text-left md:text-[15px] md:leading-[22.5px] lg:text-base [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Gain budget control by optimizing inventory and orders.
            </p>
          </div>
          <div className="flex flex-col gap-1 px-[12px] md:px-6">
            <h2 className="font-medium text-[28px] text-brand-500 font-cabin md:text-[37px] leading-[41.44px] lg:text-[40px] lg:leading-[44.8px]">
              30 hr+
            </h2>
            <p className="font-normal font-lato text-[18px] leading-[27px] text-[#4a5578] text-left  md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px] [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Save time
            </p>
            <p className="text-[14px] font-normal font-lato leading-[21px]  text-[#4a5578] text-left  md:text-[15px] md:leading-[22.5px] lg:text-base [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Days to onboard/train, seconds for data entry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 px-[12px] md:px-6">
            <h2 className="font-medium text-[28px] text-brand-500 font-cabin md:text-[37px] leading-[41.44px] lg:text-[40px] lg:leading-[44.8px]">
              40%
            </h2>
            <p className="font-normal font-lato text-[18px] leading-[27px] text-[#4a5578] text-left md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px] [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Accelerate tech transfer
            </p>
            <p className="text-[14px] font-normal font-lato leading-[21px]  text-[#4a5578] text-left md:text-[15px] md:leading-[22.5px] lg:text-base [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Make transitions seamless and IND-ready.
            </p>
          </div>
          <div className="flex flex-col gap-1 px-[12px] md:px-6">
            <h2 className="font-medium text-[28px] text-brand-500 font-cabin md:text-[37px] leading-[41.44px] lg:text-[40px] lg:leading-[44.8px]">
              &lt; 4 weeks
            </h2>
            <p className="font-normal font-lato text-[18px] leading-[27px] text-[#4a5578] text-left  md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px] [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Customizable software
            </p>
            <p className="text-[14px] font-normal font-lato leading-[21px]  text-[#4a5578] text-left  md:text-[15px] md:leading-[22.5px] lg:text-base [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Quick custom features built for your lab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roi;
