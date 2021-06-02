import React, {createContext, FunctionComponent, useState} from 'react'

interface StateContext {
    isLoading: boolean,
    setIsLoading(loading:boolean): void;
}

const initialValue = {
    isLoading:false,
    setIsLoading: (loading:boolean) => undefined
}

const MyContextProvider = createContext<StateContext>(initialValue);

export const ContextProvider:FunctionComponent = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);

    const value: StateContext = {
        isLoading,
        setIsLoading
    }

    return (
        <MyContextProvider.Provider value={value}>{children}</MyContextProvider.Provider>
    )
}

export default ContextProvider;

