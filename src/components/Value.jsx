function Value() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="flex flex-col gap-8 px-8 py-[30px] bg-[#fff] justify-between md:py-10 md:px-20 lg:order-2 lg:py-[60px] lg:px-20">
        <div className="flex flex-col gap-5 lg:max-w-[540px]">
          <div className="absolute">
            <img src="/tab/quotes.png" alt="quotes" />
          </div>
          <div className="relative sm:max-w-[321px]">
            <p className="font-normal font-lato text-[18px] leading-[27px] text-[#020d3b] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              “User-friendly interface, powerful features, and commitment to
              security and compliance make it a standout choice in the
              competitive landscape of laboratory software.”
            </p>
          </div>
          <div className="flex flex-col gap-1 md:flex-row md:gap-5">
            <h3 className="font-semibold font-lato text-[18px] leading-[27px] text-brand-500 md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Bhavya V.
            </h3>
            <div className="sm:hidden md:block">
              <img src="tab/Line 4.png" alt="" />
            </div>
            <h3 className="font-semibold font-lato text-[18px] leading-[27px] text-brand-500 md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Enterprise (&gt; 1000 emp.)
            </h3>
          </div>
        </div>
        <div className="flex gap-4 py-3">
          <img src="/design/dot 1.png" alt="dot" />
          <img src="/design/dot 2.png" alt="dot" />
          <img src="/design/dot 3.png" alt="dot" />
        </div>
      </div>

      <div className="py-10 px-8 gap-[10px] bg-[#e2d8f8] md:py-[60px] md:px-20 lg:py-[105px] lg:px-20 ">
        <div className="flex flex-col gap-[30px] md:gap-[60px] lg:max-w-[670px] lg:gap-[60px] sm:max-w-[321px]">
          <span className="font-medium font-cabin text-[28px] text-[#020d3b] leading-[31.36px] md:text-[37px] md:leading-[41.44px] lg:text-[40px] lg:leading-[44.8px] lg:w-[540px]">
            Join thousands of industry leaders in scientific research
          </span>
          <div className="pr-4 flex flex-col gap-4 md:flex-row md:gap-4 lg:pr-4">
            <input
              type="text"
              placeholder="email@company.com"
              className="rounded-[4px] bg-[#f9f9fb] w-full py-[6px] px-3 font-normal font-lato text-[#7d89b0] text-base placeholder:text-[#7d89b0] placeholder:font-normal placeholder:text-base placeholder:font-lato md:h-10 md:w-[300px] md:text-[18px] md:leading-[27px] lg:placeholder:text-[19px] lg:placeholder:leading-[28.5px]"
            />
            <button className="rounded-[4px] p-2 bg-[#0728b6] font-semibold font-lato text-base text-[#fff] w-[126px] md:h-10 md:w-[147px] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
              Request demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;