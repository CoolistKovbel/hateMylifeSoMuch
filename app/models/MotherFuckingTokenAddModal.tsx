import React from "react";
import { useModal } from "../hooks/use-modal-store";
import { toast } from "react-toastify";

const MotherFuckingTokenAddModal = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const fm = signature;

  const isModalOpen = isOpen && type === "KillUserDreamsFuacet";

  const onSubmit = async () => {
    try {
      console.log("handling the stupid request.");
    } catch (error) {
      toast(
        "Stupid fucking error accured, cant fucking add a fucking token you stupid fucking dipshit."
      );
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

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

          <label htmlFor="TokenContractABI" className="flex flex-col gap-3">
            <span className="text-xl font-bold">ABI Contract:</span>
            <textarea
              placeholder="Enter the fucking contractABI motherfuckier"
              name="TokenContractABI"
              id="TokenContractABI"
              className="p-2 bg-[#544] rounded drop-shadow-lg h-[300px]"
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
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
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
