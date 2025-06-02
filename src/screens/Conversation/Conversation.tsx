import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { SideBarSection } from "../Frame/sections/SideBarSection/SideBarSection";
import { ArrowLeft } from "lucide-react";

export const Conversation = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex h-screen w-full bg-white">
      <SideBarSection />
      <div className="flex-grow overflow-hidden [background:linear-gradient(90deg,rgba(255,245,242,1)_0%,rgba(248,240,255,1)_100%)]">
        <div className="h-full flex flex-col px-[10%] md:px-[3%] py-6">
          <div className="mb-6">
            <Link 
              to="/chat-history" 
              className="flex items-center text-[#6c44c6] hover:underline mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Chats
            </Link>
            <h1 className="text-2xl font-bold">Conversation {id}</h1>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {/* Placeholder for chat messages */}
            <p>Chat messages will appear here...</p>
          </div>
          <div className="flex gap-2">
            <Input 
              className="flex-grow"
              placeholder="Type your message..."
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
