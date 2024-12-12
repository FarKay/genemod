/* eslint-disable react/prop-types */
function Heading({ children }) {
  return (
    <h1 className="font-medium font-cabin text-[32px] leading-[35.84px] text-center text-[#020d3b] md:text-[45px] md:leading-[50.4px] lg:leading-[53.76px] lg:text-[48px]">
      {children}
    </h1>
  );
}

export default Heading;
