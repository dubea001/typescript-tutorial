'use client';

import { ColorActionType, SizeActionType, StateType } from '@/types/types';
import { createContext, useReducer } from 'react';

const INITAL_STATE = {
    theme: 'dark',
    fontSize: 16,
};

type ActionType = ColorActionType | SizeActionType;

export const ThemeContext = createContext<{
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: INITAL_STATE,
    dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark',
            };
        case 'CHANGE_FONTSIZE':
            return {
                ...state,
                fontSize: action.payload,
            };

        default:
            return state;
    }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITAL_STATE);
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};
