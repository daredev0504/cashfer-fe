
import {
  GET_TRANSACTIONS,CLEAR_TRANSACTIONS
} from "../../types";

export const reducer =  (state: any, action: any) => {

  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        data: action.payload,
      };
    case CLEAR_TRANSACTIONS:
      return {
        ...state,
        data: action.payload,
      };

    default:
  }
  return state;
}
