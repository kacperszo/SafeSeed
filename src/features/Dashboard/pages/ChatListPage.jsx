import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import LeafImg from "../../../assets/leaf-1.png";
import LeafImg2 from "../../../assets/leaf-2.png";
import Card from "../components/Card";
import ChatListCard from './../components/ChatListCard';

const ChatListPage = () => {
    return <div className="flex flex-col h-screen h-max-screen bg-beige font-mont" >
        <Topbar/>
        <div className="p-4 text-deep-purple w-4/5 relative z-30">
            <h1 className="text-3xl font-quirky font-black mb-3">Your <span className="text-haps" >chats</span></h1>
            <p className="text-katowice font-medium">Labore do in elit minim proident aliqua tempor cupidatat deserunt.</p>
        </div>
        <div className="flex flex-col flex-grow w-full p-4 space-y-3 overflow-y-scroll" >
            <ChatListCard username={"Grzegorz"} tagline={"Hejka co tam"} />
        </div>
        <Navbar page="chat-list"/>
        <img
            className="fixed -bottom-8 -right-28 scale-[0.75] rotate-[330deg]"
            src={LeafImg2.src}
            alt="leaf"/>
        <img
            className="fixed -left-36 top-44 scale-[0.85] rotate-[120deg]"
            src={LeafImg.src}
            alt="another leaf"/>
    </div>;
};

export default ChatListPage;
