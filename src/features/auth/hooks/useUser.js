import create from "zustand";

const useUser = create(set => ({
    token: "",
    userData: {},
    setUserData: (data) => {
        set(s=>({...s, userData: data}))
    },
    setToken: (newToken) => {
        set({token: newToken})  
    }
}))

export default useUser