import { useState } from "react";
import tabs from "../biotabs";
import tabData from "../tabData";
import ProductTab from "./ProductTab";
import TargetAudiences from "./TargetAudiences";

function Biopharmaceutical() {
  const [activeTabId, setActiveTabId] = useState(1);

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };

  return (
    <div className="bg-[#f5f7ff] py-10 min-h-[623px]">
      <ul className="flex flex-row pl-6 overflow-x-clip gap-5 md:px-10 md:pt-5 md:justify-center md:flex-wrap flex-nowrap lg:gap-8 whitespace-nowrap">
        {tabs.map((tab) => (
          <ProductTab
            {...tab}
            key={tab.id}
            isActive={activeTabId}
            setIsActive={handleTabClick}
          >
            {tab.name}
          </ProductTab>
        ))}
      </ul>

      <div className="">
        {tabData
          .filter((data) => data.id === activeTabId)
          .map((data) => (
            <TargetAudiences data={data} key={data.id} />
          ))}
      </div>
    </div>
  );
}

export default Biopharmaceutical;
