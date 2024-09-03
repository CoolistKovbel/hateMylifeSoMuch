"use client";

import { toast } from "react-toastify";
import { handleUserEmailMailinglist } from "../lib/actions";

const EmailList = () => {

    const HandleSubmit = async (e:any) => {
        e.preventDefault()
        console.log('sending email')

        const res = await handleUserEmailMailinglist(e.target.userEmailList.value)
        
        if(res.status === "success"){
          toast(res.payload as string)
          e.target.userEmailList.value = ""
        } else {
          toast("error mother fucker")
        }

    }



  return (
    <form onSubmit={HandleSubmit} className="flex items-center justify-center">

      <label htmlFor="userEmailList">
        <input
          type="email"
          placeholder="enter your email fool"
          className="p-2 bg-[#222] drop-shadow-lg  text-emerald-400 font-bold underline"
          id="userEmailList"
          name="userEmailList"
        />
      </label>

      <button className="p-2 bg-[#468]">submit</button>
    </form>
  );
};

export default EmailList;
