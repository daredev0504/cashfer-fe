import WalletContext from "./WalletContext";
import { reducer } from "./WalletReducer";
import { useReducer, useEffect } from "react";
import { FUND_WALLET, FUND_ERROR } from "../../types";
import { walletService } from "../../Services/walletService";

const CreateWalletState = (props: any) => {
  const initialState = {
    data: {},
    error:{},
    isModalOpen: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const fundWallet = (fundingData: any) => {
    walletService
      .fundMyWallet(fundingData)
      .then((data) => {
        console.log(data);
        
        dispatch({
          type: FUND_WALLET,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
        
        dispatch({
          type: FUND_ERROR,
          payload: error,
        });
      });
  };
  return (
    <WalletContext.Provider
      value={{ data: state.data, isModalOpen: state.isModalOpen, fundWallet, error:state.error }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default CreateWalletState;
