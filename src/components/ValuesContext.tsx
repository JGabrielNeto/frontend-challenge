import React, { useState, createContext, useContext } from "react";

type valuesContextTypes = {
    state: {
        income: string,
        indexing: string,
        ipca: number,
        cdi: number
    },
    setState: any
}

type propsValueContext = {
    state: valuesContextTypes;
    setState: React.Dispatch<React.SetStateAction<valuesContextTypes>>
}

const DEFAULT_VALUES = {
    state: {
        income: "income",
        indexing: "indexing",
        ipca: 10.10,
        cdi: 9.10
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