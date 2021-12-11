import Navbar from "../components/Navbar";
import LeafImg from "../../../assets/leaf-1.png";
import LeafImg2 from "../../../assets/leaf-2.png";
import Topbar from "../components/Topbar";
import { useQuery } from "react-query";
import { getSimilarUsers } from "../api/searchApi";
import ChatListCard from "../components/ChatListCard";

export default function SearchPage() {
    const {data,isLoading} = useQuery("similarusers",getSimilarUsers)

    return (
        <div className="bg-beige h-screen w-full font-mont max-h-screen flex flex-col">
            <Topbar/>
            <div className="w-4/5 p-4">
                <div>
                    <h1 className="text-3xl font-quirky font-black text-deep-purple mb-3">Discover some new <span className="text-haps">friends</span></h1>
                </div>
                <div className="text-katowice font-medium">
                    Chatting with people can help you heal. You’re stronger together!
                </div>
            </div>
            <div className="flex flex-col flex-grow w-full p-4 space-y-3 overflow-y-scroll">
                {!isLoading && data.map(({nickname, bio, id})=>{
                    return <ChatListCard key={id} username={nickname} tagline={bio} />
                })}
            </div>
            <Navbar page="search"/>
            <img
                className="fixed -bottom-8 -right-28 scale-[0.75] max-h-screen"
                src={LeafImg2.src}
                alt="leaf"/>
            <img
                className="fixed -left-36 top-52 scale-[0.70] rotate-[120deg]"
                src={LeafImg.src}
                alt="another leaf"/>
        </div>
    );
}