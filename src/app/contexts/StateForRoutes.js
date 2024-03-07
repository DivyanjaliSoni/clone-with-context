import { createContext,useContext } from "react";

export const RouteContext = createContext({
    CurrentPage : "login",
    updateCurrentPage : () => {},
   
})

export const useRouteContext = () => {
    return useContext(RouteContext)
}

export const RouteProvider = RouteContext.Provider