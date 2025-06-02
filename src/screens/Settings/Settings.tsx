import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { SideBarSection } from "../Frame/sections/SideBarSection/SideBarSection";

export const Settings = (): JSX.Element => {
  const navigate = useNavigate();
  const [billingInfo, setBillingInfo] = useState({
    name: "John Doe",
    address: "123 Main St, Anytown, USA 12345",
    paymentMethod: "Visa ending in 1234"
  });

  const handleBillingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateBillingInfo = () => {
    console.log("Updating billing information:", billingInfo);
    // Here you would typically send this information to your backend
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <SideBarSection />
      <div className="flex-grow overflow-hidden [background:linear-gradient(90deg,rgba(255,245,242,1)_0%,rgba(248,240,255,1)_100%)]">
        <div className="h-full overflow-y-auto px-[10%] md:px-[3%] py-6">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <Input type="text" placeholder="Your username" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" placeholder="Your email" />
                </div>
                <Button className="bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Current Plan: Free</p>
                <Button 
                  onClick={() => navigate("/pricing")}
                  className="bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]"
                >
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <Input 
                      type="text" 
                      name="name" 
                      value={billingInfo.name} 
                      onChange={handleBillingInfoChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <Input 
                      type="text" 
                      name="address" 
                      value={billingInfo.address} 
                      onChange={handleBillingInfoChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <Input 
                      type="text" 
                      name="paymentMethod" 
                      value={billingInfo.paymentMethod} 
                      onChange={handleBillingInfoChange}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleUpdateBillingInfo}
                  className="bg-gradient-to-r from-[rgba(255,87,51,1)] to-[rgba(107,33,168,1)] hover:from-[rgba(255,87,51,0.9)] hover:to-[rgba(107,33,168,0.9)]"
                >
                  Update Billing Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
