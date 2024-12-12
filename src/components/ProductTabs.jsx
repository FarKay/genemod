import { useState } from "react";
import Tabs from "../tabs";
import ProductTab from "./ProductTab";

function ProductTabs() {
  const [isActive, setIsActive] = useState(1);

  return (
    <ul className="flex gap-5 px-5 md:justify-center lg:gap-10">
      {Tabs.map((tab) => (
        <ProductTab
          {...tab}
          isActive={isActive}
          setIsActive={setIsActive}
          key={tab.id}
        >
          {tab.name}
        </ProductTab>
      ))}

      {/* <ProductTab>
        Notebook
        <hr className="border-none bg-[#2c52f7] h-[2px]" />
      </ProductTab>

      <ProductTab>
        Inventory
        <hr className="border-none bg-[#eff1f5] h-[2px]" />
      </ProductTab>

      <ProductTab>
        Equipment
        <hr className="border-none bg-[#eff1f5] h-[2px]" />
      </ProductTab>

      <ProductTab>
        Consumables
        <hr className="border-none bg-[#eff1f5] h-[2px]" />
      </ProductTab>

      <ProductTab>
        Orders
        <hr className="border-none bg-[#eff1f5] h-[2px]" />
      </ProductTab>

      <ProductTab>
        Genemod AI
        <hr className="border-none bg-[#eff1f5] h-[2px]" />
      </ProductTab> */}
    </ul>
  );
}

export default ProductTabs;
