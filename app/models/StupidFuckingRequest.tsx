import { toast } from "react-toastify";
import { useModal } from "../hooks/use-modal-store";

const StupidFuckingRequest = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const fm = signature;

  const isModalOpen = isOpen && type === "KillSelfAddition";

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
      className={`fixed inset-0 flex items-center justify-center z-20 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50 "
        onClick={onClose}
      >x</div>

      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <header className="p-5">
          <h2 className="text-2xl">Want us to add a token</h2>
          <p className="text-sm text-gray-500 p-4 italic">
            If you want us to list another fuecet with a specfic token, fill out
            the form below best of your abliity
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#666] p-10 rounded drop-shadow-lg overflow-auto h-[500px]"
        >
          <label htmlFor="userContactEmail" className="flex flex-col gap-3">
            <span className="text-xl font-bold">EMAIL:</span>
            <input
              type="email"
              placeholder="Enter the your stupid email"
              name="userContactEmail"
              id="userContactEmail"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenContractSymbol" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token SYMBOL:</span>
            <input
              type="text"
              placeholder="Enter the fucking symbol"
              name="TokenContractSymbol"
              id="TokenContractSymbol"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenContractName" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Name:</span>
            <input
              type="text"
              placeholder="Enter the fucking name"
              name="TokenContractName"
              id="TokenContractName"
              className="p-2 bg-[#544] rounded drop-shadow-lg"
            />
          </label>

          <label htmlFor="TokenContractAddress" className="flex flex-col gap-3">
            <span className="text-xl font-bold">Token Address:</span>
            <input
              type="text"
              placeholder="Enter the fucking address"
              name="TokenContractAddress"
              id="TokenContractAddress"
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

          <button className="p-3 bg-[#444] hover:bg-[#111] font-bold rouded drop-shadow-lg text-white">
            Create
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default StupidFuckingRequest;
