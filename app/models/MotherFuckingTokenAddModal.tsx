import React from "react";
import { useModal } from "../hooks/use-modal-store";
import { toast } from "react-toastify";
import { HandleStupidFaucetAddition } from "../lib/actions";

const MotherFuckingTokenAddModal = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const fm = signature;

  const isModalOpen = isOpen && type === "KillUserDreamsFuacet";

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      console.log("handling the stupid request.");
      const res = await HandleStupidFaucetAddition(data);
      if (res.status === "Success") {
        toast("There was a success");
        console.log(res.payload);
      }

      onClose();
    } catch (error) {
      toast(
        "Stupid fucking error accured, cant fucking add a fucking token you stupid fucking dipshit."
      );
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-20 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >

      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}>
        x
      </div>

      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        
        <header className="p-5">
          <h2 className="text-2xl">Add Token To Fucking Faucet</h2>
          <p className="text-sm text-gray-500 p-4 italic">
            You are able to add a token to our fucking faucet just need to
            provide, the amount , rate , the abi, and the fucking contract.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#666] p-10 rounded drop-shadow-lg overflow-auto h-[500px]"
        >
          <label htmlFor="TokenContract" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Contract:</span>
            <input
              type="text"
              placeholder="Enter the fucking contract"
              name="TokenContract"
              id="TokenContract"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenContractName" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Contract Name:</span>
            <input
              type="text"
              placeholder="Enter the fucking contract name"
              name="TokenContractName"
              id="TokenContractName"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenContractSymbol" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Contract Symbol:</span>
            <input
              type="text"
              placeholder="Enter the fucking contract Symbol"
              name="TokenContractSymbol"
              id="TokenContractSymbol"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenContractABI" className="flex flex-col gap-3">
            <span className="text-xl font-bold">ABI Contract:</span>
            <textarea
              placeholder="Enter the fucking contractABI motherfuckier"
              name="TokenContractABI"
              id="TokenContractABI"
              className="p-2 bg-[#544] rounded drop-shadow-lg h-[300px] resize-none overflow-auto"
            ></textarea>
          </label>

          <label htmlFor="TokenDistrubute" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Distrubute:</span>
            <input
              type="number"
              placeholder="Enter the amount of fucking tokens you want to start with"
              name="TokenDistrubute"
              id="TokenDistrubute"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenRewardRate" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Reward Rate:</span>
            <input
              type="number"
              placeholder="Set the fucking reward rate "
              name="TokenRewardRate"
              id="TokenRewardRate"
              className="p-2 bg-[#544] rounded drop-shadow-lg resize-none overflow-auto"
            />
          </label>

          <label
            htmlFor="TokenRewardRateTimeSet"
            className="flex flex-col gap-3 bg-[#8f4fa4E1] p-3 rounded drop-shadow"
          >
            <span className="text-xl font-bold underline text-center font-bold">
              Set Countdown
            </span>
            <div className="flex items-center justify-around">
              <input
                type="number"
                max="12"
                min="0"
                placeholder="H"
                name="TokenRewardRateTimeSetHour"
                id="TokenRewardRateTimeSetHour"
                className="p-2 bg-[#544] rounded drop-shadow-lg w-[20%] font-bold"
              />

              <input
                type="number"
                max="60"
                min="0"
                placeholder="M"
                name="TokenRewardRateTimeSetMin"
                id="TokenRewardRateTimeSetMin"
                className="p-2 bg-[#544] rounded drop-shadow-lg w-[20%] font-bold"
              />
            </div>
          </label>

          <button className="p-3 bg-[#444] hover:bg-[#111] font-bold rouded drop-shadow-lg text-white">
            Create
          </button>
        </form>

      </dialog>

    </div>
  );
};

export default MotherFuckingTokenAddModal;
