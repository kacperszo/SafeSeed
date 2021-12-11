import { useUser } from ".";

const authHeaders = () => {
    const { token } = useUser.getState()
    const header = `Bearer ${token}`;
    return {headers: {"Authorization": header}}
}

export {authHeaders}