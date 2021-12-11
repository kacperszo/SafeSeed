import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import LeafImg from "../../../assets/leaves.png";
import Card from "../components/Card";
import ChatListCard from './../components/ChatListCard';

const ChatListPage = () => {
    return <div className="flex flex-col h-screen h-max-screen bg-beige font-mont" >
        <Topbar/>
        <div className="p-4 text-deep-purple w-3/4">
            <h1 className="text-3xl font-quirky font-black mb-3">Your <span className="text-haps" >chats</span></h1>
            <p className="text-katowice font-medium">Labore do in elit minim proident aliqua tempor cupidatat deserunt.</p>
        </div>
        <div className="flex flex-col flex-grow w-full p-4" >
            <ChatListCard username={"Grzegorz"} latestMessage={"Hejka co tam"} />
        </div>
        <Navbar/>
        <img
                className="fixed bottom-0 right-0 z-10"
                src={LeafImg.src}
                alt="leaf"/>
            <img
                className="fixed bottom-10 -left-40 rotate-[120deg]"
                src={LeafImg.src}
                alt="another leaf"/>
    </div>;
};

export default ChatListPage;
