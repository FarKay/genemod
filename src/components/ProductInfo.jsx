function ProductInfo() {
  return (
    <div className="py-10 bg-[#f5f7ff] md:py-[60px] lg:pt-[60px]">
      <div className="flex flex-col gap-5 md:gap-10 lg:px-20">
        <h2 className="font-medium font-cabin text-[32px] leading-[35.84px] text-center text-[#020d3b] md:text-[45px] md:leading-[50.4px] lg:leading-[53.76px] lg:text-[48px]">
          Put all of your work in one place
        </h2>
        <div className="flex gap-5 px-5 md:justify-center lg:gap-10">
          <div className="py-[2px] font-semibold font-lato text-[16px] leading-6 text-brand-500 md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            Notebook
            <hr className="border-none bg-[#2c52f7] h-[2px]" />
          </div>
          <div className="font-normal font-lato text-[#7d89b0] text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            Inventory
            <hr className="border-none bg-[#eff1f5] h-[2px]" />
          </div>
          <div className="font-normal font-lato text-[#7d89b0] text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            Equipment
            <hr className="border-none bg-[#eff1f5] h-[2px]" />
          </div>
          <div className="font-normal font-lato text-[#7d89b0] text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            Consumables
            <hr className="border-none bg-[#eff1f5] h-[2px]" />
          </div>
          <div className="font-normal font-lato text-[#7d89b0] text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            Orders
            <hr className="border-none bg-[#eff1f5] h-[2px]" />
          </div>
          <div className="font-normal font-lato text-[#7d89b0] text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
            Genemod AI
            <hr className="border-none bg-[#eff1f5] h-[2px]" />
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="pt-8 px-6 md:pt-10 md:px-10 lg:order-2 lg:pr-20 lg:pb-[60px] lg:pl-4">
          <img
            src="/desktop/notebook file.png"
            alt="product info"
            className="lg:w-[727px] lg:h-[477px]"
          />
        </div>
        <div className="pt-8 px-6 flex flex-col gap-4 md:pt-10 md:px-10 md:gap-8 lg:order-1 lg:pl-20 lg:pt-10 lg:pr-10 lg:pb-[60px]">
          <div className="lg:flex lg:flex-col lg:gap-8 md:grid md:grid-cols-3 md:gap-8 sm:grid sm:gap-4">
            <div className="flex gap-4">
              <img
                src="/design/icon badge.png"
                alt="icon"
                className="h-8 w-8"
              />
              <p className="font-normal font-lato text-[18px] text-[#4a5578] leading-[27px] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Live document editing within the main text editor saves you time
                and gives you instant updates.
              </p>
            </div>
            <div className="flex gap-4">
              <img
                src="/design/icon badge.png"
                alt="icon"
                className="h-8 w-8"
              />
              <p className="font-normal font-lato text-[18px] text-[#4a5578]  leading-[27px] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Collaborate seamlessly with team members in one place, via
                real-time edits, comments, and feedback; no more confusion over
                different “versions.”
              </p>
            </div>
            <div className="flex gap-4">
              <img
                src="/design/icon badge.png"
                alt="icon"
                className="h-8 w-8"
              />
              <p className="font-normal font-lato text-[18px] text-[#4a5578]  leading-[27px] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Draft, revise, and finalize research documents efficiently while
                retaining full document version history.
              </p>
            </div>
          </div>
          <div>
            <hr className="border-none bg-[#d3dbfe] h-[1px] lg:pl-20" />
            <div className="pt-4 pb-2 flex items-center justify-center lg:items-start lg:justify-start ">
              <button className=" font-semibold font-lato text-[16px] leading-[24px] text-[#051d85] md:text-[18px] md:leading-[27px] lg:pl-10 lg:pt-4 lg:pb-2">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
