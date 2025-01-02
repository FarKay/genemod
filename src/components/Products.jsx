function Products() {
  return (
    <div className="flex flex-col gap-8 py-10 px-6 md:px-10 md:py-[60px] md:gap-[40px] lg:px-20">
      <h2 className="font-medium font-cabin text-[32px] leading-[35.84px] text-center text-[#020d3b] md:text-[45px] md:leading-[50.4px] lg:text-[48px] lg:leading-[53.76px]">
        Streamlining research team productivity
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 sm:grid sm:gap-">
        <div className="bg-[#f5f7ff] rounded-2xl pt-6 pb-8 flex flex-col gap-8 md:p-8 shadow-custom-2 lg:order-2 lg:grid lg:col-span-2 lg:p-8 md:col-span-2 sm:pt-6 sm:pb-8 sm:px-6">
          <div className="md:rounded-2xl">
            <img
              src="/desktop/freezer gif.png"
              alt="image"
              className="md:rounded-2xl w-full h-auto lg:rounded-2xl hidden md:block"
            />
            <img
              src="/design/freezer gif.png"
              alt="freezer gif"
              className="md:hidden w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 text-left px-3">
            <h4 className="font-medium font-cabin text-[24px] leading-[26.88px] text-brand-500 md:text-[31px] md:leading-[34.72px] lg:text-[33px] lg:leading-[36.96px]">
              Visualize sample storage
            </h4>
            <span className="font-normal font-lato text-[18px] leading-[27px] text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px] md:max-w-[690px] lg:max-w-full">
              Digitalize freezers and track samples, minimizing manual logging
              time. Genemod’s Laboratory Information Management System (LIMS)
              ensures an optimized research workflow.
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-1 hidden">
          <div>
            <img
              src="/desktop/consumables.png"
              alt="image"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 md:max-w-[303px] lg:max-w-full">
            <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
              Manage consumables
            </h3>
            <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Effortlessly track lab consumables with Genemod LIMS. Visualize
              space layouts for precise inventory management.
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-3 hidden">
          <div>
            <img
              src="/desktop/reports & protocol.png"
              alt="image"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 md:max-w-[303px] lg:max-w-full">
            <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
              Generate reports and protocols
            </h3>
            <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Create and manage research reports and protocols in a central hub.
              Genemod’s Electronic Lab Notebook (ELN) offers a user-friendly
              digital lab workspace.
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-4 hidden">
          <div>
            <img
              src="/desktop/equipment illustrations.png"
              alt="image"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 md:max-w-[303px] lg:max-w-full">
            <h3 className="text-[31px] leading-[34.72px] font-cabin font-medium text-brand-500 lg:text-[33px] lg:leading-[36.96px]">
              Simplify equipment scheduling
            </h3>
            <p className="text-[22px] leading-[33px] font-lato font-normal text-[#7d89b0] md:text-[22px] md:leading-[33px] lg:text-[23px] lg:leading-[34.5px]">
              Optimize equipment use with Genemod’s scheduling tool, enabling
              efficient planning and management in a user-friendly format.
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-[32px] md:p-8 bg-[#f5f7ff] rounded-2xl shadow-custom-2 lg:order-5 hidden">
          <div>
            <img
              src="/desktop/notebook.png"
              alt="image"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 md:max-w-[303px] lg:max-w-full">
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
      <div className="flex gap-4 items-center justify-center py-3 md:hidden">
        <img src="/design/dot 1.png" alt="dot" />
        <img src="/design/dot 2.png" alt="dot" />
        <img src="/design/dot 3.png" alt="dot" />
        <img src="/design/dot 4.png" alt="dot" />
        <img src="/design/dot 5.png" alt="dot" />
      </div>
    </div>
  );
}

export default Products;
