function Menu() {
  return (
    <nav>
      <ul className="lg:flex lg:capitalize lg:gap-5 lg:justify-center lg:items-center md:hidden sm:hidden">
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
    </nav>
  );
}

export default Menu;
