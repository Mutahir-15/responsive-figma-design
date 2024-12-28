import Customize from "@/components/Customize";
import Extension from "@/components/Extension";
import Herosection from "@/components/Herosection";
import Pricing from "@/components/Pricing";
import WorkManagement from "@/components/WorkManagement1";
import WorkManagement2 from "@/components/WorkManagement2";
import YourData from "@/components/YourData";
import YourWork from "@/components/YourWork";
import React from "react";

export default function Home() {
  return (
   <div>
    <Herosection/>
    <WorkManagement/>  
    <WorkManagement2/>
    <Extension/>
    <Customize/>
    <Pricing/>
    <YourWork/>
    <YourData/> 
   </div>
  );
}
