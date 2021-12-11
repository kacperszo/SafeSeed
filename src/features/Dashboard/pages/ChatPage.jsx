import { useRouter } from "next/router";
import { AiOutlineArrowLeft,AiOutlineHeart,AiOutlineFlag,AiOutlineSend  } from "react-icons/ai";
import ChatMessage from "../components/ChatMessage";
const ChatPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const messages = [
        {
            text: "siemano",
            incoming: false
        },
        {
            text: "kolano",
            incoming: true
        },
        {
            text: "co tam",
            incoming: false
        },
        {
            text: "u ciebie",
            incoming: true
        },
    ];

    return (
        <div className="h-screen max-h-screen w-full bg-beige flex flex-col">
            <nav className="p-4 flex justify-between text-deep-purple">
                <div className="flex items-center space-x-2 ">
                    <span className="text-xl">
                    <AiOutlineArrowLeft/>
                    </span>
                    <h2 className="font-quirky font-black text-2xl">
                        Grzegorz                        
                    </h2>
                </div>
                <div className="flex text-3xl items-center space-x-1">
                    <AiOutlineHeart/>
                    <AiOutlineFlag/>
                </div>
            </nav>
            <div className="flex-grow flex-col-reverse flex p-4">{
                messages.map(({text,incoming})=>(
                    <ChatMessage key={text} message={text} incoming={incoming}/>)
                )
            }</div>
            <div className="bg-relish/60 p-4">
                <form className="w-full flex justify-between">
                    <input placeholder="Message" className="flex-grow rounded-full mr-2 pl-4 focus:ring-4 focus:outline-none"></input>
                    <button className="rounded-full w-12 h-12 bg-white flex justify-center items-center">
                        <AiOutlineSend/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatPage;
