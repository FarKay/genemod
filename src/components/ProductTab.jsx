/* eslint-disable react/prop-types */
function ProductTab({ children, id, isActive, setIsActive }) {
  const activeTab = (id) => {
    if (id === isActive) {
      return "text-[#2c52f7] font-semibold";
    } else {
      return "text-[#7d89b0] font-normal";
    }
  };

  return (
    <li
      className={`py-[2px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28.5px] lg:font-lato cursor-pointer ${activeTab(
        id
      )}`}
      onClick={() => setIsActive(id)}
    >
      {children}
      {id === isActive ? (
        <hr className="border-none bg-[#2c52f7] h-[2px]" />
      ) : (
        <hr className="border-none bg-[#eff1f5] h-[2px]" />
      )}
    </li>
  );
}

export default ProductTab;
