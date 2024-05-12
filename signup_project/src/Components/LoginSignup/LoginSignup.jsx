import React, { useState } from "react";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
    const [action,SetAction]=useState("Sign Up");
  return (
    <div className="h-screen bg-gradient-to-b from-slate-400 to-slate-950 flex justify-center items-center flex-col">
      <div className="m-2 p-2 bg-white w-[400px]">
        <div className="flex items-center justify-center flex-col ">
          <div className="text-slate-800 font-bold text-2xl">{action}</div>
          <div className="w-12 h-1 bg-slate-800"></div>
        </div>
        {action==="Login"?(<div></div>):(<div className="flex items-center  bg-slate-200 m-3 p-2 gap-2"> 
           <div >
            <img src={user_icon} alt="" />
           </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="rounded-sm bg-transparent px-1"
            />
          </div>
        </div>)}
        
        <div className="flex items-center bg-slate-200  m-3 p-2 gap-2">
          <div className="">
            {" "}
            <img src={email_icon} alt="" />{" "}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="rounded-sm bg-transparent px-1"
            />
          </div>
        </div>
        <div className="flex items-center bg-slate-200  m-3 p-2 gap-2">
          <div className="">
            {" "}
            <img src={password_icon} alt="" />{" "}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="rounded-sm bg-transparent px-1"
            />
          </div>
        </div>
        {action==='Sign Up'?(<div></div>):(<div className='pl-4 mt-7 text-gray-500 text-lg'>Forgot Password? <span className= 'text-orange-950 font-bold cursor-pointer'>Click Here</span></div>)}
        
        <div className='flex gap-5  justify-center item-center text-white py-5'>
            <div className={ action==="Login" ?'bg-[#4c00b4] rounded-[50px] w-38 p-2 h-12 font-semibold text-xl cursor-pointer text-center':'bg-gray-500 rounded-[50px] w-38 p-2 h-12 font-semibold text-xl cursor-pointer text-center'} onClick={()=>{
              SetAction("Sign Up")  
            }}>
             Sign Up</div>
            <div className={ action==="Sign Up" ?'bg-[#4c00b4] rounded-[50px] w-38 p-2 h-12 font-semibold text-xl cursor-pointer text-center':'bg-gray-500 rounded-[50px] w-38 p-2 h-12 font-semibold text-xl cursor-pointer text-center'}
            onClick={()=>{
                SetAction("Login")
            }}>Login</div>
        </div>
      
      
      </div>
    </div>
  );
};

export default LoginSignup;
