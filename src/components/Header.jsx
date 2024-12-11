function Header() {
  return (
    <nav className="bg-[#fff] py-4 px-5 flex gap-4 justify-between items-center lg:px-20">
      <div>
        <img src="/logo.png" alt="genemod logo" />
      </div>
      <div>
        <ul className="lg:flex lg:capitalize lg:gap-2 lg:justify-center lg:items-center md:hidden sm:hidden">
          <li className="flex gap-2 justify-center items-center py-2 px-3">
            <span className="text-base font-lato font-normal text-[#404968]">
              products
            </span>
            <div>
              <img src="/desktop/arrow-down.png" alt="arrow down" />
            </div>
          </li>
          <li className="flex gap-2 justify-center items-center py-2 px-3">
            <span className="text-base font-lato font-normal text-[#404968]">
              solutions
            </span>
            <div>
              <img src="/desktop/arrow-down.png" alt="arrow down" />
            </div>
          </li>
          <li className="flex gap-2 justify-center items-center py-2 px-3">
            <span className="text-base font-lato font-normal text-[#404968]">
              resources
            </span>
            <div>
              <img src="/desktop/arrow-down.png" alt="arrow down" />
            </div>
          </li>
          <li className="flex gap-2 justify-center items-center py-2 px-3">
            <span className="text-base font-lato font-normal text-[#404968]">
              pricing
            </span>
            <div>
              <img src="/desktop/arrow-down.png" alt="arrow down" />
            </div>
          </li>
          <li className="flex gap-2 justify-center items-center py-2 px-3">
            <span className="text-base font-lato font-normal text-[#404968]">
              company
            </span>
            <div>
              <img src="/desktop/arrow-down.png" alt="arrow down" />
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
  );
}

export default Header;
