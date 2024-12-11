function ValueProp() {
  return (
    <div className="md:grid md:grid-cols-[319px_auto] md:pt-10 lg:grid-cols-2">
      <div className="relative top-[40.4px]">
        <img
          src="/design/dashboard-widget-tab.png"
          alt="dashboard widget"
          className="lg:hidden"
        />
        <img
          src="/desktop/dashboard-widget.png"
          alt="dashboard widget"
          className="sm:hidden md:block"
        />
      </div>
      <div className="py-10 px-6 flex flex-col gap-4 md:py-[60px] md:pl-[60px] md:pr-10 lg:pr-20 lg:pl-10">
        <div className="lg:w-[580px]">
          <h2 className="font-normal font-cabin text-[32px] leading-[35.84px] text-center text-[#020d3b md:text-[45px] md:leading-[50.4px] md:text-left lg:text-[48px] lg:leading-[53.76px] ">
            Modern software for streamlining scientific research
          </h2>
        </div>
        <div className="flex flex-col py-4 gap-4 md:gap-6 justify-center lg:gap-8">
          <div className="flex gap-4">
            <img
              src="/design/icon badge-2.png"
              alt="icon"
              className="w-8 h-8"
            />
            <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Digitize research workflows in minutes
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/design/icon badge-2.png"
              alt="icon"
              className="w-8 h-8"
            />
            <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Visualize inventory and centralize everything
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/design/icon badge-2.png"
              alt="icon"
              className="w-8 h-8"
            />
            <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Manage all the projects in a single notebook
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/design/icon badge-2.png"
              alt="icon"
              className="w-8 h-8"
            />
            <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Let AI help you on the reports
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueProp;
