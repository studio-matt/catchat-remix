import React from "react";
import { ChatInterfaceSection } from "./sections/ChatInterfaceSection";
import { SideBarSection } from "./sections/SideBarSection/SideBarSection";

export const Frame = (): JSX.Element => {
  return (
    <div
      className="flex h-screen w-full bg-white"
      data-model-id="1:4"
    >
      <div className="flex w-full h-full [background:linear-gradient(90deg,rgba(255,245,242,1)_0%,rgba(248,240,255,1)_100%)]">
        <SideBarSection />
        <div className="flex-grow overflow-hidden">
          <div className="h-full overflow-y-auto px-[10%] md:px-[3%]">
            <ChatInterfaceSection />
          </div>
        </div>
      </div>
    </div>
  );
};
