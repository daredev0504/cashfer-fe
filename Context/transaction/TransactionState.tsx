import TransactionContext from "./TransactionContext";
import { reducer } from "./TransactionReducer";
import { useReducer, useEffect } from "react";
import { transactionService } from "../../Services/transactionService";
import { GET_TRANSACTIONS } from "../../types";
import { CLEAR_TRANSACTIONS } from "../../types";

const CreateTransactionState = (props: any) => {
  const initialState = {
    data: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getTransaction = () => {
      transactionService
        .getMyTransactionsLoggedIn()
        .then((data) => {
          dispatch({
            type: GET_TRANSACTIONS,
            payload: data,
          });
        })
        .catch(() => {});
    };

    getTransaction();
    return () => {
      dispatch({
        type: CLEAR_TRANSACTIONS,
        payload: [],
      });
    };
  }, []);

  return (
    <TransactionContext.Provider value={{ data: state.data }}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default CreateTransactionState;
