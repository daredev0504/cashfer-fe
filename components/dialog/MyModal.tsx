import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import WalletContext from "../../Context/wallet/WalletContext";
import { walletService } from "../../Services/walletService";
import { alertService } from "../../Services/alertService";

export default function MyModal(props: any) {
  const context = useContext(WalletContext);

  const [currencyId, setCurrencyId] = useState("");
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    let abortController = new AbortController();
    getWallet();
    return () => {
      abortController.abort();
    };
  }, []);

  const getWallet = () => {
    walletService
      .getMyWallet()
      .then((data) => {
        console.log("33333333333333333333", data);
        // get return url from query parameters or default to '/'
        setCurrencyId(data[0].currencyId);
        setOwnerId(data[0].ownerId);

        console.log("ownerId", ownerId);
      })
      .catch(() => {});
  };

 const dum = () =>{
   alert("jksksksks")
 }
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={props.closeModal} // if (context.error) {
          //   alertService.error("account cannot be funded");
          // } else {
          //   alertService.success("account funded successfully, waiting for approval from admin");
          // }
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block flex-col text-center w-full max-w-xl p-6 my-8 overflow-hidden align-middle transition-all transform dark:bg-gray-800 bg-white shadow-xl rounded-2xl drop-shadow-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 dark:text-gray-200 text-gray-900 mb-12"
                >
                  Add Money
                </Dialog.Title>
                <div className="mt-2">
                  <div>
                    <SendMoneyFields
                      fundWallet={dum}
                      closeModal={props.closeModal}
                    />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const SendMoneyFields = (props: any) => {
  const [amount, setamount] = useState("");
  return (
    <div>
      <form onSubmit={(e) => props.fundWallet()}>
        {" "}
        <div className="">
          <label className="text-gray-500 text-xs" htmlFor="">
            Enter Amount
          </label>
          <div className="w-1/2 mx-auto">
            <input
              className="w-full border text-center pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
              type="text"
              placeholder=""
              onChange={(event) => setamount(event.target.value)}
              required
              value={amount}
              
            />
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-cashfer-purple border border-transparent rounded-md hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              // onClick={props.closeModal}
            >
              Fund Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
