import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar"
import { useUser } from "../../auth";
import { getNewNickname } from "../api/dashboardApi";
import { useMutation } from "react-query";
import { IoMdRefresh } from "react-icons/io";
import Link from "next/link";

export default function SettingsPage() {
    const { setUserData, setToken, userData, token } = useUser();
    const { mutateAsync: nicknameMutate } = useMutation(getNewNickname, {
        onSuccess(data) {
            setUserData({nickname: data.nickname})
        }
    })

    return (
        <div className="bg-beige h-screen w-full font-mont">
            <Topbar disabled />
            <div className="p-3">
                <h1 className="text-3xl font-quirky font-black text-deep-purple mb-3 w-4/5">Change your <span className="text-haps">username</span></h1>
                <div className="border-2 rounded-lg text-xl border-katowice w-full">
                    { userData.nickname }
                    <button type="button" onClick={async () => await nicknameMutate()} className="h-12 w-12 flex items-center justify-center">
                        <IoMdRefresh />
                    </button>
                </div>
            </div>
            <div className="p-3">
                <h1 className="text-3xl font-quirky font-black text-deep-purple mb-3 w-4/5">Retake the signup <span className="text-haps">form</span></h1>
                <div className="text-xs text-katowice font-medium w-4/5">
                    Are you unhappy with your friend suggestions? You can retake the entry questionnaire to improve them&nbsp;:)
                </div>
                <Link href="/register/trait" passHref>
                    <a>
                        <div className="mt-3 w-full bg-haps hover:bg-govtech p-3 transition-all text-white font-quirky font-black rounded-lg text-center">
                            Go for it!
                        </div>
                    </a>
                </Link>
            </div>
            <div className="fixed bottom-0 w-full">
                <Navbar page="none" />
            </div>
        </div>
    );
}