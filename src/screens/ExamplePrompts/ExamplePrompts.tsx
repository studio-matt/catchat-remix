import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { SideBarSection } from "../Frame/sections/SideBarSection/SideBarSection";
import { LightbulbIcon, MailIcon, InfoIcon, CodeIcon } from "lucide-react";

const examplePrompts = [
  {
    id: 1,
    icon: <LightbulbIcon className="w-4 h-4" />,
    title: "Birthday Wish",
    content: "Write a fun birthday message for my cat-loving friend.",
  },
  {
    id: 2,
    icon: <MailIcon className="w-4 h-4" />,
    title: "Email Reply",
    content: "Draft a polite reply for a meeting invite.",
  },
  {
    id: 3,
    icon: <InfoIcon className="w-4 h-4" />,
    title: "Fun Facts",
    content: "Tell me three fun facts about cats.",
  },
  {
    id: 4,
    icon: <CodeIcon className="w-4 h-4" />,
    title: "Code Help",
    content: "Explain this JS code in simple terms.",
  },
  {
    id: 5,
    icon: <LightbulbIcon className="w-4 h-4" />,
    title: "Creative Writing",
    content: "Write a short story about a time-traveling cat.",
  },
  {
    id: 6,
    icon: <InfoIcon className="w-4 h-4" />,
    title: "Explain Concept",
    content: "Explain quantum computing as if I'm five years old.",
  },
];

export const ExamplePrompts = (): JSX.Element => {
  const navigate = useNavigate();

  const handlePromptClick = (promptId: number) => {
    navigate(`/conversation/${promptId}`);
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <SideBarSection />
      <div className="flex-grow overflow-hidden [background:linear-gradient(90deg,rgba(255,245,242,1)_0%,rgba(248,240,255,1)_100%)]">
        <div className="h-full overflow-y-auto px-[10%] md:px-[3%] py-6">
          <h1 className="text-2xl font-bold mb-6">Example Prompts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {examplePrompts.map((prompt) => (
              <Card 
                key={prompt.id} 
                className="bg-[#f6f5ff] border-[#e8e6fb] shadow-[0px_1px_2px_#0000000d] rounded-xl cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handlePromptClick(prompt.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    {prompt.icon}
                    <span className="ml-2 font-semibold text-[#6c44c6] text-base">
                      {prompt.title}
                    </span>
                  </div>
                  <p className="font-normal text-gray-600 text-sm">
                    "{prompt.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
