import { createContext,useContext } from "react";

export const RouteContext = createContext({
    Login : false,
    Profile : false,
    Edit : false,
    MyProfile : false,
    Message : false,
    MessageWith : false,
    updateLogin : () => {},
    updateProfile : () => {},
    updateEdit : () => {},
    updateMyProfile : () => {},
    updateMessage : () => {},
    updateMessageWith : () => {},
})

export const useRouteContext = () => {
    return useContext(RouteContext)
}

export const RouteProvider = RouteContext.Provider