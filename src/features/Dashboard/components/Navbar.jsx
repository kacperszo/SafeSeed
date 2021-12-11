import Link from "next/link";
import { AiOutlineCompass } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { BiBook } from "react-icons/bi";

export default function Navbar({page}) {
    let [colorSearch, colorChat, colorProfessionals] = ["text-neutral-300", "text-neutral-300", "text-neutral-300"];
    colorSearch = page === "search" ? "text-white" : colorSearch;
    colorChat = page === "chat-list" ? "text-white" : colorChat;
    colorProfessionals = page === "professionals" ? "text-white" : colorProfessionals;
    return (
        <nav className="bg-relish/60 p-3 w-full flex align-center justify-evenly relative z-30 backdrop-blur-lg text-sm font-mont">
            <Link href="/dash/" passHref>
                <a className={ "flex flex-col items-center justify-center w-1/3 " + colorSearch}>
                    <span className="text-2xl">
                        <AiOutlineCompass className="" />
                    </span>
                    <span>Search</span>
                </a>
            </Link>
            <Link href="/dash/chat" passHref>
                <a className={"flex flex-col items-center justify-center w-1/3 " + colorChat}>
                    <span className="text-xl">
                        <BsChatLeftText />
                    </span>
                    <span>Chat</span>
                </a>
            </Link>
            <Link href="/dash/psychologists" passHref>
                <a className={"flex flex-col items-center justify-center w-1/3 " + colorProfessionals}>
                    <span className="text-2xl">
                        <BiBook />
                    </span>
                    <span>Professionals</span>
                </a>
            </Link>
        </nav>
    );
}