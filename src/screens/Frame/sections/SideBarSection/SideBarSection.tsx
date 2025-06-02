import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SideBarSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  // Navigation menu items data
  const menuItems = [
    {
      icon: <img className="w-3.5 h-4" alt="New chat" src="https://c.animaapp.com/cAaX3PH2/img/frame.svg" />,
      text: "New Chat",
      isPrimary: true,
      path: "/",
    },
    {
      icon: <img className="w-4 h-4" alt="Chat history" src="https://c.animaapp.com/cAaX3PH2/img/frame-1.svg" />,
      text: "Chat History",
      isPrimary: false,
      path: "/chat-history",
    },
    {
      icon: <img className="w-4 h-4" alt="Settings" src="https://c.animaapp.com/cAaX3PH2/img/frame-2.svg" />,
      text: "Settings",
      isPrimary: false,
      path: "/settings",
    },
    {
      icon: <img className="w-[18px] h-4" alt="Example prompts" src="https://c.animaapp.com/cAaX3PH2/img/frame-3.svg" />,
      text: "Example Prompts",
      isPrimary: false,
      path: "/example-prompts",
    },
  ];

  return (
    <aside 
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[310px] bg-white bg-opacity-85" : "w-[80px] bg-transparent"
      } h-full flex flex-col`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Header with logo and title */}
      <header className={`pt-6 px-4 ${isExpanded ? "items-start" : "items-center"}`}>
        <div className={`flex ${isExpanded ? "items-center" : "flex-col items-center"}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-lg"></div>
            <img
              className={`object-cover relative z-10 ${isExpanded ? "w-[69px] h-[60px]" : "w-[50px] h-[43px]"} md:w-[50px] md:h-[43px]`}
              alt="CatChat Logo"
              src="https://c.animaapp.com/cAaX3PH2/img/mark-only-2@2x.png"
            />
          </div>
          {isExpanded && (
            <div className="ml-2">
              <div className="flex items-center">
                <h1 className="font-bold text-2xl md:text-xl text-[#20202a] tracking-[-1px] leading-[24px]">
                  CatChat
                </h1>
                <Badge className="ml-1 bg-[#ecebfd] text-[#6c44c6] font-semibold rounded-full px-2 text-xs">
                  Beta
                </Badge>
              </div>
              <p className="text-xs text-gray-400 tracking-[0.24px] leading-3">
                AI Chat Companion
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Main navigation */}
      <nav className="mt-8 px-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant={item.isPrimary ? "default" : "ghost"}
                className={`w-full h-10 justify-start ${
                  item.isPrimary
                    ? "bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => navigate(item.path)}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                {isExpanded && (
                  <span
                    className={`ml-2 font-${item.isPrimary ? "semibold" : "medium"} text-${item.isPrimary ? "white" : "[#2f205c]"}`}
                  >
                    {item.text}
                  </span>
                )}
              </Button>
            </li>
          ))}
        </ul>

        {/* Upgrade card */}
        {isExpanded && (
          <Card className="mt-8 rounded-xl border shadow-[0px_1px_3px_#0000001a,0px_1px_2px_#0000001a] [background:linear-gradient(90deg,rgba(255,247,231,1)_0%,rgba(225,231,255,1)_50%,rgba(245,240,255,1)_100%)]">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="flex items-center justify-center w-[34px] h-[30px] mt-2">
                <img
                  className="w-[33.75px] h-[30px]"
                  alt="Crown"
                  src="https://c.animaapp.com/cAaX3PH2/img/frame-4.svg"
                />
              </div>
              <h3 className="font-semibold text-sm text-[#202040] mt-2">
                Upgrade to Pro
              </h3>
              <p className="text-xs text-[#6c44c6] leading-3">
                Unlock all features
              </p>
              <Button 
                className="mt-4 h-7 w-[92px] rounded-lg text-xs font-bold bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]"
                onClick={() => navigate("/pricing")}
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        )}
      </nav>

      {/* UserIcon profile section */}
      <footer className="mt-auto px-4 pb-4">
        <div className="flex flex-col items-center mb-4">
          <div 
            className="w-9 h-9 rounded-full border-2 border-solid border-[#6c44c6] shadow-[0px_1px_3px_#0000001a,0px_1px_2px_#0000001a] bg-[url(https://c.animaapp.com/cAaX3PH2/img/img@2x.png)] bg-cover bg-center cursor-pointer" 
            onClick={() => navigate("/settings")}
          />
          {isExpanded && <p className="text-sm text-gray-600 mt-2">Welcome, Guest</p>}
        </div>
        {isExpanded && (
          <div className="flex justify-center">
            <Button variant="ghost" className="text-[#6c44c6]" onClick={() => navigate("/settings")}>
              <img
                className="w-3.5 h-4 mr-2"
                alt="Account"
                src="https://c.animaapp.com/cAaX3PH2/img/frame-5.svg"
              />
              Account
            </Button>
            <Button variant="ghost" size="icon" className="ml-2" onClick={() => navigate("/settings")}>
              <img
                className="w-4 h-4"
                alt="Settings"
                src="https://c.animaapp.com/cAaX3PH2/img/frame-6.svg"
              />
            </Button>
          </div>
        )}
      </footer>
    </aside>
  );
};
