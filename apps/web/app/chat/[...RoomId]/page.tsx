"use client"
import { TextInput } from "@repo/ui/text-input"
import { useState } from "react";
export default function ChatRoom({params} : any){
    const [msg,setMsg] = useState("");
    return (
        <div style={{
            height : "100vh",
            width : "100vw",
            display : "flex",
            justifyContent :"space-between",
            flexDirection : "column"
        }}>
            <div>
            Chat Room
            </div>
            <div style={{
                
            }}>
                <TextInput placeholder="Chat Here!!" size="small" onChange={(e : any)=>{
                   setMsg(e.target.value);
                }}/>
                <button onClick={()=>{
                    alert(`Message sent : ${msg}`);
                }}>Send</button>
            </div>
        </div>
       
    )
}