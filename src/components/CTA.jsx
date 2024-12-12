function CTA() {
  return (
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
  );
}

export default CTA;
