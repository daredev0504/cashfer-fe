
import {
  FUND_WALLET, FUND_ERROR
} from "../../types";

export const reducer =  (state: any, action: any) => {

  switch (action.type) {
    case FUND_WALLET:
      return {
        ...state,
        data: action.payload,
        isModalOpen: true,
      };
    case FUND_ERROR:
      return {
        ...state,
        error: action.payload,
        isModalOpen: true,
      };
    default:
  }
  return state;
}
