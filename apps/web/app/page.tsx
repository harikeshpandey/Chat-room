"use client"
import {TextInput} from "@repo/ui/text-input"
import {  useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [value , setValue] = useState("");
  const router = useRouter();
  return (
    <div style={{
      height : "100vh",
      width : "100vw",
      background :" black",
      display : "flex",
      justifyContent : "center",
      justifyItems : "center"

    }}>
<div style={{
  display : "flex",
  justifyItems : "center",
  flexDirection : "column"
}}>
     < TextInput onChange={(e :any)=> {
        setValue(e.target.value);
     }} placeholder = "Enter Code" size="big"/>

      <button onClick={()=>{
        router.push(`/chat/${value}`)
      }}>Join Room</button>
      </div>
    </div>
  );
}
