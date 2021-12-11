import create from "zustand";
import { persist } from "zustand/middleware"

const useUser = create(persist(set => ({
    token: "",
    userData: {},
    setUserData: (data) => {
        set(s=>({...s, userData: data}))
    },
    setToken: (newToken) => {
        set({token: newToken})  
    }
})), {
    name: "safe-seed",
})

export default useUser