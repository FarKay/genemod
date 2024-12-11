function App() {
  return (
    <div className="bg-[#fbfbfa] mx-0 my-0">
      <nav className="bg-[#fff] py-4 px-5 flex gap-4 justify-between items-center lg:px-20">
        <div>
          <img src="/design/logo.png" alt="genemod logo" />
        </div>
        <div>
          <ul className="lg:flex lg:capitalize lg:gap-2 lg:justify-center lg:items-center md:hidden sm:hidden">
            <li className="flex gap-2 justify-center items-center py-2 px-3">
              <span className="text-base font-lato font-normal text-[#404968]">
                products
              </span>
              <div>
                <img src="desktop/arrow-down.png" alt="arrow down" />
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center py-2 px-3">
              <span className="text-base font-lato font-normal text-[#404968]">
                solutions
              </span>
              <div>
                <img src="desktop/arrow-down.png" alt="arrow down" />
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center py-2 px-3">
              <span className="text-base font-lato font-normal text-[#404968]">
                resources
              </span>
              <div>
                <img src="desktop/arrow-down.png" alt="arrow down" />
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center py-2 px-3">
              <span className="text-base font-lato font-normal text-[#404968]">
                pricing
              </span>
              <div>
                <img src="desktop/arrow-down.png" alt="arrow down" />
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center py-2 px-3">
              <span className="text-base font-lato font-normal text-[#404968]">
                company
              </span>
              <div>
                <img src="desktop/arrow-down.png" alt="arrow down" />
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:gap-4 sm:hidden md:hidden">
          <div className="p-2 border border-[#051d85] rounded-[4px]">
            <button className="px-3 text-[19px] leading-[28.5px] font-semibold font-lato text-brand-500">
              Log in
            </button>
          </div>
          <div className="p-2 rounded-[4px] bg-brand-500">
            <button className="px-3 text-[19px] leading-[28.5px] font-semibold font-lato text-[#fff]">
              Request demo
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <img src="/design/nav-icon.png" alt="navigation icon" />
        </div>
      </nav>

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
            src="desktop/Freezer graphical video.png"
            alt="freezer-graphical-video"
          />
        </div>
      </div>

      <div className="bg-[#fbfbfa] py-10 md:py-[60px] md:px-10 lg:px-20">
        <div className="flex gap-6 items-center md:gap-6 md:py-2 justify-center lg:py-4">
          <img src="social proof/image 17.png" />
          <img src="social proof/image 3.png" />
          <img src="social proof/image 6.png" />
          <img src="social proof/image 4.png" />
          <img src="social proof/image 18.png" />
          <img src="social proof/image 7.png" />
          <img src="social proof/image 8.png" />
          <img src="social proof/image 9.png" />
        </div>
      </div>

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
              src="desktop/notebook file.png"
              alt="product info"
              className="lg:w-[727px] lg:h-[477px]"
            />
          </div>
          <div className="pt-8 px-6 flex flex-col gap-4 md:pt-10 md:px-10 md:gap-8 lg:order-1 lg:pl-20 lg:pt-10 lg:pr-10 lg:pb-[60px]">
            <div className="lg:flex lg:flex-col lg:gap-8 md:grid md:grid-cols-3 md:gap-8 sm:grid sm:gap-4">
              <div className="flex gap-4">
                <img
                  src="design/icon badge.png"
                  alt="icon"
                  className="h-8 w-8"
                />
                <p className="font-normal font-lato text-[18px] text-[#4a5578] leading-[27px] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                  Live document editing within the main text editor saves you
                  time and gives you instant updates.
                </p>
              </div>
              <div className="flex gap-4">
                <img
                  src="design/icon badge.png"
                  alt="icon"
                  className="h-8 w-8"
                />
                <p className="font-normal font-lato text-[18px] text-[#4a5578]  leading-[27px] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                  Collaborate seamlessly with team members in one place, via
                  real-time edits, comments, and feedback; no more confusion
                  over different “versions.”
                </p>
              </div>
              <div className="flex gap-4">
                <img
                  src="design/icon badge.png"
                  alt="icon"
                  className="h-8 w-8"
                />
                <p className="font-normal font-lato text-[18px] text-[#4a5578]  leading-[27px] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                  Draft, revise, and finalize research documents efficiently
                  while retaining full document version history.
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

      <div className="md:grid md:grid-cols-[319px_auto] md:pt-10 lg:grid-cols-2">
        <div className="relative top-[40.4px]">
          <img
            src="design/dashboard-widget-tab.png"
            alt="dashboard widget"
            className="lg:hidden"
          />
          <img
            src="desktop/dashboard-widget.png"
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
                src="design/icon badge-2.png"
                alt="icon"
                className="w-8 h-8"
              />
              <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Digitize research workflows in minutes
              </p>
            </div>
            <div className="flex gap-4">
              <img
                src="design/icon badge-2.png"
                alt="icon"
                className="w-8 h-8"
              />
              <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Visualize inventory and centralize everything
              </p>
            </div>
            <div className="flex gap-4">
              <img
                src="design/icon badge-2.png"
                alt="icon"
                className="w-8 h-8"
              />
              <p className="text-[18px] font-normal font-lato leading-[27px] text-[#4a5578] text-left decoration-skip-ink-0 underline-offset-auto md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Manage all the projects in a single notebook
              </p>
            </div>
            <div className="flex gap-4">
              <img
                src="design/icon badge-2.png"
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

      <div className="flex flex-col gap-8 py-10 px-6 md:px-10 md:py-[60px] md:gap-[40px] lg:px-20">
        <h2 className="font-medium font-cabin text-[32px] leading-[35.84px] text-center text-[#020d3b] md:text-[45px] md:leading-[50.4px] lg:text-[48px] lg:leading-[53.76px]">
          Streamlining research team productivity
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 sm:grid sm:gap-">
          <div className="bg-[#f5f7ff] rounded-2xl pt-6 pb-8 flex flex-col gap-8 md:p-8 shadow-custom-2 lg:order-2 lg:grid lg:col-span-2 lg:p-8 md:col-span-2 sm:pt-6 sm:pb-8 sm:px-6">
            <div className="md:rounded-2xl">
              <img
                src="desktop/freezer gif.png"
                alt="image"
                className="md:rounded-2xl md:w-full lg:w-[690px] lg:h-[389px] lg:rounded-2xl sm:hidden md:block"
              />
              <img
                src="design/freezer gif.png"
                alt="freezer gif"
                className="md:hidden w-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-3 text-left px-3">
              <h4 className="font-medium font-cabin text-[24px] leading-[26.88px] text-brand-500 md:text-[31px] md:leading-[34.72px] lg:text-[33px] lg:leading-[36.96px]">
                Visualize sample storage
              </h4>
              <span className="font-normal font-lato text-[18px] leading-[27px] text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px] md:max-w-[690px]">
                Digitalize freezers and track samples, minimizing manual logging
                time. Genemod’s Laboratory Information Management System (LIMS)
                ensures an optimized research workflow.
              </span>
            </div>
          </div>
          <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-1 sm:hidden">
            <div>
              <img
                src="desktop/consumables.png"
                alt="image"
                className="rounded-2xl md:w-[303px] md:h-[325px]"
              />
            </div>
            <div className="flex flex-col gap-3 md:max-w-[303px]">
              <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
                Manage consumables
              </h3>
              <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Effortlessly track lab consumables with Genemod LIMS. Visualize
                space layouts for precise inventory management.
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-3 sm:hidden">
            <div>
              <img
                src="desktop/reports & protocol.png"
                alt="image"
                className="rounded-2xl lg:w-[303px] lg:h-[300px] md:h-[275px]"
              />
            </div>
            <div className="flex flex-col gap-3 md:max-w-[303px]">
              <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
                Generate reports and protocols
              </h3>
              <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Create and manage research reports and protocols in a central
                hub. Genemod’s Electronic Lab Notebook (ELN) offers a
                user-friendly digital lab workspace.
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-4 sm:hidden">
            <div>
              <img
                src="desktop/equipment illustrations.png"
                alt="image"
                className="rounded-2xl lg:w-[303px] lg:h-[300px] md:h-[291px]"
              />
            </div>
            <div className="flex flex-col gap-3 md:max-w-[303px]">
              <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
                Simplify equipment scheduling
              </h3>
              <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Optimize equipment use with Genemod’s scheduling tool, enabling
                efficient planning and management in a user-friendly format.
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-5 sm:hidden">
            <div>
              <img
                src="desktop/notebook.png"
                alt="image"
                className="rounded-2xl lg:w-[303px] lg:h-[300px] md:h-[324px]"
              />
            </div>
            <div className="flex flex-col gap-3 md:max-w-[303px]">
              <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
                Perform real-time collaboration
              </h3>
              <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
                Enhance lab processes with real-time collaboration using Genemod
                LIMS. Track changes instantly on a unified platform.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center md:hidden">
          <img src="design/dot 1.png" alt="dot" />
          <img src="design/dot 2.png" alt="dot" />
          <img src="design/dot 3.png" alt="dot" />
          <img src="design/dot 4.png" alt="dot" />
          <img src="design/dot 5.png" alt="dot" />
        </div>
      </div>

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
            <img src="tab/image.png" alt="image" className="lg:hidden" />
            <img
              src="desktop/bio-image.png"
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
                  identification with informed decision-making, bolstered by
                  tools that foster team collaboration. It&apos;s an elevated
                  approach to R&D, blending practicality with actionable
                  insights.
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
                  <img src="design/arrow-right.png" alt="arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-8 px-8 py-[30px] bg-[#fff] justify-between md:py-10 md:px-20 lg:order-2 lg:py-[60px] lg:px-20">
          <div className="flex flex-col gap-5 lg:max-w-[540px]">
            <div className="absolute">
              <img src="tab/quotes.png" alt="quotes" />
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
            <img src="design/dot 1.png" alt="dot" />
            <img src="design/dot 2.png" alt="dot" />
            <img src="design/dot 3.png" alt="dot" />
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

      <div className="py-10 px-6 bg-[#fbfbfa] flex flex-col gap-6 md:py-[60px] md:px-20 md:gap-10 lg:py-[60px] lg:px-20">
        <div className="flex flex-col gap-6">
          <div className="md:px-20">
            <h2 className="font-medium font-cabin text-[32px] leading-[35.84px] text-center md:text-[45px] md:leading-[50.4px] lg:text-[48px] lg:leading-[53.76px]">
              Stay ahead with the latest trends
            </h2>
          </div>
          <div className="sm:flex sm:flex-col sm:gap-2 rounded-2xl bg-[#f5f7ff] border border-[#eff1f5] p-2 md:bg-[#fbfbfa] md:border-none md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-8">
            <div className="md:border md:rounded-2xl md:bg-[#f5f7ff] md:p-2 md:flex md:flex-col md:col-span-2 md:gap-4 md:border-[#eff1f5] shadow-custom-2 lg:w-[392px] lg:col-auto">
              <div>
                <img
                  src="desktop/blog-image.png"
                  alt="science-lab"
                  className="md:w-full md:h-[256px]"
                />
              </div>
              <div className="flex flex-col p-2 gap-3 md:justify-between">
                <div className="md:flex md:flex-col md:gap-3">
                  <h4 className="font-semibold font-lato text-base text-[#020d3b] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
                    Scientific discoveries unveiled: Exploring the wonders of
                    the universe
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
                <img src="desktop/blog-image.png" alt="science-lab" />
              </div>
              <div className="flex flex-col p-2 gap-3 md:justify-between">
                <div className="md:flex md:flex-col md:gap-3 md:max-w-[295px]">
                  <h4 className="font-semibold font-lato text-base text-[#020d3b] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
                    Scientific discoveries unveiled: Exploring the wonders of
                    the universe
                  </h4>
                  <span className="font-normal font-lato text-[14px] leading-[21px] text-[#4a5578] md:text-[15px] md:leading-[22.5px] md:overflow-hidden md:whitespace-nowrap md:text-ellipsis lg:text-base">
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
                <img src="desktop/blog-image.png" alt="science-lab" />
              </div>
              <div className="flex flex-col p-2 gap-3 md:justify-between">
                <div className="md:flex md:flex-col md:gap-3 md:max-w-[295px]">
                  <h4 className="font-semibold font-lato text-base text-[#020d3b] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px]">
                    Scientific discoveries unveiled: Exploring the wonders of
                    the universe
                  </h4>
                  <span className="font-normal font-lato text-[14px] leading-[21px] text-[#4a5578] md:text-[15px] md:leading-[22.5px] md:overflow-hidden md:whitespace-nowrap md:text-ellipsis lg:text-base">
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
        </div>
        <div className="flex py-3 gap-4 justify-center items-center md:hidden">
          <img src="design/dot 1.png" alt="dot" />
          <img src="design/dot 6.png" alt="dot" />
          <img src="design/dot 7.png" alt="dot" />
        </div>
        <div className="flex gap-3 p-2 justify-center items-center">
          <button className="px-3 font-semibold font-lato text-[19px] leading-[28.5px] text-[#020d3b]">
            Read more blogs
          </button>
          <img
            src="design/arrow-right-2.png"
            alt="arrow-right"
            className="w-[16.33px] h-[16.33px]"
          />
        </div>
      </div>

      <footer className="py-10 px-6 bg-[#020d3b] text-[#fff] flex flex-col gap-10 lg:p-20">
        <div className="flex flex-col gap-8 lg:max-w-[1500px] lg:grid lg:grid-cols-3">
          <div>
            <button className="p-2 rounded font-semibold font-lato text-[11px] leading-[16.5px] uppercase">
              Products
            </button>
            <div className="grid grid-cols-2 gap-6 font-normal text-[12px] leading-[18px] font-lato lg:text-[13px] lg:leading-[19.5px]">
              <ul>
                <li className="p-2">
                  <a href="http://">Virtual freezers</a>
                </li>
                <li className="p-2">
                  <a href="http://">Consumables</a>
                </li>
                <li className="p-2">
                  <a href="http://">Orders</a>
                </li>
                <li className="p-2">
                  <a href="http://">Alerts</a>
                </li>
                <li className="p-2">
                  <a href="http://">Experiments</a>
                </li>
                <li className="p-2">
                  <a href="http://">Protocols</a>
                </li>
              </ul>
              <ul>
                <li className="p-2">
                  <a href="http://">Version control</a>
                </li>
                <li className="p-2">
                  <a href="http://">Reports</a>
                </li>
                <li className="p-2">
                  <a href="http://">Genemod AI</a>
                </li>
                <li className="p-2">
                  <a href="http://">Security</a>
                </li>
                <li className="p-2">
                  <a href="http://">Integrations</a>
                </li>
                <li className="p-2">
                  <a href="http://">Equipment</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="p-2 rounded font-semibold text-[11px] leading-[16.5px] uppercase font-lato">
              Solutions
            </button>
            <div className="grid grid-cols-2 gap-6 font-normal text-[12px] leading-[18px] font-lato lg:text-[13px] lg:leading-[19.5px]">
              <ul>
                <li className="p-2">
                  <a href="http://">Biopharma</a>
                </li>
                <li className="p-2">
                  <a href="http://">Industrial biotech</a>
                </li>
                <li className="p-2">
                  <a href="http://">Clinincal research</a>
                </li>
                <li className="p-2">
                  <a href="http://">Biomanufacturers</a>
                </li>
                <li className="p-2">
                  <a href="http://">Biorepositories</a>
                </li>
                <li className="p-2">
                  <a href="http://">Contact services</a>
                </li>
              </ul>
              <ul>
                <li className="p-2">
                  <a href="http://">Cell therapy</a>
                </li>
                <li className="p-2">
                  <a href="http://">RNA therapy</a>
                </li>
                <li className="p-2">
                  <a href="http://">Antibodies</a>
                </li>
                <li className="p-2">
                  <a href="http://">CRO/Consulting</a>
                </li>
                <li className="p-2">
                  <a href="http://">Chemistry</a>
                </li>
                <li className="p-2">
                  <a href="http://">Startups</a>
                </li>
                <li className="p-2">
                  <a href="http://">Academia</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 md:grid md:gap-6 sm:grid sm:gap-6">
            <div>
              <button className="p-2 rounded font-semibold text-[11px] leading-[16.5px] uppercase font-lato">
                Resources
              </button>
              <div className="grid grid-cols-2 gap-6 font-normal text-[12px] leading-[18px] font-lato lg:text-[13px] lg:leading-[19.5px] lg:grid-cols-1 lg:gap-0">
                <ul>
                  <li className="p-2">
                    <a href="http://">vs Excel</a>
                  </li>
                  <li className="p-2">
                    <a href="http://">vs LabArchives</a>
                  </li>
                  <li className="p-2">
                    <a href="http://">vs Quartzy</a>
                  </li>
                  <li className="p-2">
                    <a href="http://">vs FreezerPro</a>
                  </li>
                </ul>
                <ul>
                  <li className="p-2">
                    <a href="http://">Blog</a>
                  </li>
                  <li className="p-2">
                    <a href="http://">Case Studies</a>
                  </li>
                  <li className="p-2">
                    <a href="http://">LMS</a>
                  </li>
                  <li className="p-2">
                    <a href="http://">ELN</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 font-normal text-[12px] leading-[18px] lg:grid-cols-1 lg:gap-0">
              <div>
                <button className="p-2 rounded font-semibold text-[11px] leading-[16.5px] uppercase font-lato">
                  Company
                </button>
                <div className="font-lato lg:text-[13px] lg:leading-[19.5px]">
                  <ul>
                    <li className="p-2">
                      <a href="http://">Pricing</a>
                    </li>
                    <li className="p-2">
                      <a href="http://">About us</a>
                    </li>
                    <li className="p-2">
                      <a href="http://">Career</a>
                    </li>
                    <li className="p-2">
                      <a href="http://">Events</a>
                    </li>
                    <li className="p-2">
                      <a href="http://">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button className="p-2 rounded font-semibold text-[11px] leading-[16.5px] uppercase font-lato">
                  Socials
                </button>
                <div className="font-lato lg:text-[13px] lg:leading-[19.5px]">
                  <ul>
                    <li className="p-2">
                      <a href="http://">LinkedIn</a>
                    </li>
                    <li className="p-2">
                      <a href="http://">X</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="h-[1px] border-none bg-[#404968]" />
          <div className="flex flex-col justify-center items-center py-4 gap-2 lg:flex-row lg:justify-between">
            <div className="py-2 lg:p-0">
              <img src="design/footer logo.png" alt="logo" />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center text-center lg:flex-row">
              <span className="py-2 font-normal font-lato text-[12px] leading-[18px] lg:text-[13px] lg:leading-[19.5px]">
                © 2024 Genemod, Inc.
              </span>
              <ul className="font-normal text-[12px] leading-[18px] text-[#eff1f5] font-lato lg:flex lg:text-[13px] lg:leading-[19.5px]">
                <li className="p-2">
                  <a href="http://">Privacy policy</a>
                </li>
                <li className="p-2">
                  <a href="http://">Terms of service</a>
                </li>
                <li className="p-2">
                  <a href="http://">MSA</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
