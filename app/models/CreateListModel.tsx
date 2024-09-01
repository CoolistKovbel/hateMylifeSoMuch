"use client";

import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { useModal } from "@/app/hooks/use-modal-store";
import Image from "next/image";
import { CreateBidAction } from "../lib/action";

const CreateListModel = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const fm = signature;

  const isModalOpen = isOpen && type === "CreateBid";

  const router = useRouter();

  //
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const user = await provider.send("eth_requestAccounts", []);

    const form = e.target as HTMLFormElement;

    // user data
    const payload: {
      token: string;
      amount: string;
      selling: string;
      signature: string;
    } = {
      token: "",
      amount: "",
      selling: "",
      signature: "",
    };

    try {
      // Accessing form elements using the `elements` property
      const message = `Im selling`;
      const signature = await signer.signMessage(message);

      console.log(form);

      for (let i = 0; i < 4; i++) {
        if (form[i].checked === true) {
          payload.token = (form[i] as any).value;
        }
      }

      (payload.amount as any) = ethers.utils.parseEther(
        (form[5].value as any).toString()
      );

      (payload.selling as any) = ethers.utils.parseEther(
        (form[6].value as any).toString()
      );

      payload.signature = signature;


      console.log(payload.token, "the tplke")


      const res = await CreateBidAction(JSON.stringify(payload));
      
      console.log(res)

      router.refresh();

      onClose();
    } catch (error) {
      console.log(error);
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
          <h2 className="text-2xl">Create a Bid</h2>
          <p className="text-sm text-gray-500 p-4 italic">
            Its simple, start by selecting a token and the amount you want to
            sell, set a price and submit. Users will be able to find your
            request and you will get paid.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#666] p-10 rounded drop-shadow-lg"
        >
          <label
            htmlFor="TokenIn"
            className="flex w-[80%] justify-between overflow-auto mx-auto"
          >
            <div className="flex flex-col items-center justify-between">
              <span className="w-[100px] h-[100px] relative">
                <Image src="/bitcoinpng.png" alt="bitcoin" fill />
              </span>
              <input
                type="checkbox"
                id="bitcoin"
                name="bitcoin"
                value="WBTC_CONTRACT_ADDRESS"
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <span className="w-[100px] h-[100px] relative">
                <Image src="/ethereumpng.png" alt="bitcoin" fill />
              </span>
              <input
                type="checkbox"
                id="eth"
                name="eth"
                value="WETH_CONTRACT_ADDRESS"
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <span className="w-[100px] h-[100px] relative">
                <Image src="/shiba-inu-shib-logo.svg" alt="bitcoin" fill />
              </span>
              <input
                type="checkbox"
                id="shib"
                name="shib"
                value="SHIB_CONTRACT_ADDRESSS"
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <span className="w-[100px] h-[100px] relative">
                <Image src="/DOGEpng.png" alt="bitcoin" fill />
              </span>
              <input
                type="checkbox"
                id="doge"
                name="doge"
                value="DOGE_CONTRACT_ADDRESS"
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <span className="w-[100px] h-[100px] relative">
                <Image src="/NueroClumpToken.png" alt="bitcoin" fill />
              </span>
              <input
                type="checkbox"
                id="NCT"
                name="NCT"
                value="NEURONCLUMPTOKEN_ADDRESS"
              />
            </div>
          </label>

          <label htmlFor="TokenBuyAmount" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token amount;</span>
            <input
              type="number"
              placeholder="amount"
              name="TokenBuyAmount"
              id="TokenBuyAmount"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenSellPrice" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Sell Price;</span>
            <input
              type="number"
              placeholder="amount"
              name="TokenSellPrice"
              id="TokenSellPrice"
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

export default CreateListModel;
