"use client";

import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { useModal } from "@/app/hooks/use-modal-store";

const ConnectUserModel = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const fm = signature;

  const isModalOpen = isOpen && type === "ConnectUser";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();

      const form = e.target as HTMLFormElement;

      // Accessing form elements using the `elements` property

      const message = `You are the current account holder signing today`;
      const signature = await signer.signMessage(message);

      const payload = {
        signature,
        username: fm,
      };

      console.log(payload);

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
      >x</div>

      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <header>
          <h2>Hello world</h2>
        </header>
      </dialog>
    </div>
  );
};

export default ConnectUserModel;
