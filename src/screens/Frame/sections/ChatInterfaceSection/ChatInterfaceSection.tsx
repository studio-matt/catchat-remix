import {
  CodeIcon,
  CrownIcon,
  InfoIcon,
  LightbulbIcon,
  MailIcon,
  SendIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

// Define data for suggestion cards
const suggestionCards = [
  {
    id: 1,
    icon: <LightbulbIcon className="w-3 h-4" />,
    title: "Birthday Wish",
    content: "Write a fun birthday message for my cat-loving friend.",
  },
  {
    id: 2,
    icon: <MailIcon className="w-3 h-4" />,
    title: "Email Reply",
    content: "Draft a polite reply for a meeting invite.",
  },
  {
    id: 3,
    icon: <InfoIcon className="w-3 h-4" />,
    title: "Fun Facts",
    content: "Tell me three fun facts about cats.",
  },
  {
    id: 4,
    icon: <CodeIcon className="w-3 h-4" />,
    title: "Code Help",
    content: "Explain this JS code in simple terms.",
  },
];

// Define data for recent prompts
const recentPrompts = [
  { id: 1, text: "How do I make coffee taste less bitter?" },
  { id: 2, text: "Write a poem about technology and cats." },
  { id: 3, text: "What is quantum computing in simple words?" },
  { id: 4, text: "How can I stay motivated to learn coding?" },
];

export const ChatInterfaceSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1130px] mx-auto py-24 bg-[#fefcf499]">
      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center mb-24">
        <img
          className="w-[161px] h-[139px] object-cover mb-1"
          alt="CatChat Logo"
          src="https://c.animaapp.com/cAaX3PH2/img/mark-only-3@2x.png"
        />
        <h1 className="font-extrabold text-4xl text-[#20202a] tracking-[-1.40px] leading-9 mb-2">
          Welcome to CatChat
        </h1>
        <p className="font-medium text-[#6c44c6] text-lg mb-6">
          Your AI companion for every question.
        </p>
        <Badge className="bg-[#e1e7ff] text-[#6c44c6] hover:bg-[#e1e7ff] px-3 py-1.5 h-8 rounded-lg">
          <span className="font-semibold text-sm">Try asking anything!</span>
        </Badge>
      </div>

      <div className="max-w-[768px] mx-auto">
        {/* Chat Messages */}
        <div className="mb-6 space-y-6">
          <div className="flex justify-end">
            <div className="max-w-[342px] p-5 rounded-2xl shadow-[0px_1px_3px_#0000001a,0px_1px_2px_#0000001a] bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)]">
              <p className="font-medium text-white text-lg">
                Hi! What can I help you with today?
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[377px] p-5 bg-[#f3f4f8] rounded-2xl shadow-[0px_1px_3px_#0000001a,0px_1px_2px_#0000001a]">
              <p className="font-medium text-[#20202a] text-lg">
                Can you help me write a birthday wish?
              </p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="mb-6 flex gap-2">
          <Input
            className="h-[58px] bg-white rounded-2xl border-[#ecebfd] shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] pl-5 text-base"
            placeholder="Type your message..."
          />
          <Button className="h-11 w-[68px] rounded-2xl shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]">
            <SendIcon className="w-5 h-5" />
          </Button>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {suggestionCards.map((card) => (
            <Card
              key={card.id}
              className="bg-[#f6f5ff] border-[#e8e6fb] shadow-[0px_1px_2px_#0000000d] rounded-xl"
            >
              <CardContent className="p-5">
                <div className="flex items-center mb-2">
                  {card.icon}
                  <span className="ml-2 font-semibold text-[#6c44c6] text-base">
                    {card.title}
                  </span>
                </div>
                <p className="font-normal text-gray-600 text-sm line-clamp-2">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Prompts */}
        <div className="mb-12">
          <h2 className="font-bold text-[#2f205c] text-lg mb-3">
            Recent Prompts
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {recentPrompts.map((prompt) => (
              <Card
                key={prompt.id}
                className="bg-white border-[#ecebfd] shadow-[0px_1px_2px_#0000000d] rounded-xl h-[38px] flex items-center"
              >
                <CardContent className="p-0 pl-4 py-2 h-full flex items-center w-full">
                  <p className="font-normal text-[#20202a] text-sm truncate">
                    "{prompt.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Banner */}
        <Card className="rounded-2xl border shadow-[0px_1px_3px_#0000001a,0px_1px_2px_#0000001a] bg-gradient-to-r from-[rgba(255,247,231,1)] via-[rgba(225,231,255,1)] to-[rgba(245,240,255,1)]">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <div className="flex items-center mb-1">
                <h3 className="font-bold text-[#2f205c] text-2xl">
                  Unlock premium features with
                </h3>
                <span className="font-bold text-[#6c44c6] text-2xl ml-1">
                  catchat Pro
                </span>
              </div>
              <p className="font-medium text-[#6c44c6] text-sm">
                Priority access, better answers, more fun!
              </p>
            </div>
            <Button className="h-[52px] w-[218px] rounded-xl shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]">
              <CrownIcon className="w-5 h-[18px] mr-2" />
              <span className="font-bold text-lg">Subscribe Now</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
