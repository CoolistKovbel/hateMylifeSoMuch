"use client";

const EmailList = () => {

    const HandleSubmit = async (e:any) => {
        e.preventDefault()
        console.log('sending email')
    }



  return (
    <form onSubmit={HandleSubmit}>

      <label htmlFor="userEmailList" className="mx-auto">
        <span>Enter Email:</span>
        <input
          type="email"
          placeholder="enter your email fool"
          className="p-2 bg-[#222] drop-shadow-lg"
        />
      </label>

      <button className="p-2 bg-[#468]">submit</button>
    </form>
  );
};

export default EmailList;
