import React from "react";
import { createCustomContext } from "../utils/CreateCustomContext";

interface IGlobalState {
   showSidebar?: boolean;
}

const initialState: IGlobalState = {
   showSidebar: false,
};

function setState(state: IGlobalState, newState: Partial<IGlobalState>): IGlobalState {
   return { ...state, ...newState };
}

const functions = {
   setState,
};

const { Context, Provider, useContextHook } = createCustomContext<IGlobalState, typeof functions>({
   initialState,
   functions,
});

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
