import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SideBarSection } from "../Frame/sections/SideBarSection/SideBarSection";

const mockConversations = [
  { id: 1, title: "AI Basics Discussion", date: "2023-04-15" },
  { id: 2, title: "Machine Learning Project", date: "2023-04-18" },
  { id: 3, title: "Natural Language Processing", date: "2023-04-20" },
  { id: 4, title: "Computer Vision Applications", date: "2023-04-22" },
];

export const ChatHistory = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen w-full bg-white">
      <SideBarSection />
      <div className="flex-grow overflow-hidden [background:linear-gradient(90deg,rgba(255,245,242,1)_0%,rgba(248,240,255,1)_100%)]">
        <div className="h-full overflow-y-auto px-[10%] md:px-[3%] py-6">
          <h1 className="text-2xl font-bold mb-6">Chat History</h1>
          <div className="space-y-4">
            {mockConversations.map((conversation) => (
              <Card key={conversation.id} className="hover:shadow-md transition-shadow">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-semibold">{conversation.title}</h3>
                    <p className="text-sm text-gray-500">{conversation.date}</p>
                  </div>
                  <div className="space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => navigate(`/conversation/${conversation.id}`)}
                    >
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => console.log(`Delete ${conversation.id}`)}>
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
