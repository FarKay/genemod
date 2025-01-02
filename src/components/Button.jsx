/* eslint-disable react/prop-types */

function Button({ children, type, onClick }) {
  const base =
    "flex justify-center items-center py-2 px-4 h-8 lg:h-11 rounded-[4px] border font-lato font-semibold lg:text-[19px] lg:leading-[28.5px] md:text-[18px] md:leading-[27px] md:h-10";

  const styles = {
    primary: base + " border-[#0728b6] text-[#fff] bg-[#0728b6]",
    secondary: base + " border-[#051d85] text-[#0728b6]",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
