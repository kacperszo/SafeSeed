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
                    We’ve chosen some people in a similar situation to you to help you go through these times. You’re stronger together!
                </div>
            </div>
            <div className="flex-grow">
                {!isLoading && data.map(({nickname,bio,id})=>{
                    return <ChatListCard key={id} username={nickname} latestMessage={bio} />
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