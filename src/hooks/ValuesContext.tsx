import React, { useState, createContext } from "react";

type valuesContextTypes = {
    state: {
        income: string,
        indexing: string,
        results: any,
        request: boolean,
        madeNewRequest: boolean
    },
    setState: any
}

const DEFAULT_VALUES = {
    state: {
        income: "bruto",
        indexing: "pre",
        results: {},
        request: false,
        madeNewRequest: true
    },
    setState: () => {},
}

export const ValuesContext = createContext<valuesContextTypes>(DEFAULT_VALUES);

export const ValuesProvider: React.FC = ({children}) => {
    const [state, setState] = useState(DEFAULT_VALUES.state)
    return (
        <ValuesContext.Provider value={{
            state, setState
        }}>
            {children}
        </ValuesContext.Provider>
    )
}