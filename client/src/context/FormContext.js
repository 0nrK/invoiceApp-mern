import { createContext, useReducer } from "react"
import FormReducer from "./FormReducer";

const INITIAL_STATE = false

export const FormContext = createContext(INITIAL_STATE)

export const FormContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);



    return (
        <FormContext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </FormContext.Provider >
    );
};

