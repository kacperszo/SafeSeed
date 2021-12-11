import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineCompass } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { BiBook } from "react-icons/bi";

export default function Navbar({page}) {
    let [colorSearch, colorChat, colorProfessionals] = ["text-neutral-300", "text-neutral-300", "text-neutral-300"];
    colorSearch = page === "search" ? "text-white" : colorSearch;
    colorChat = page === "chat" ? "text-white" : colorChat;
    colorProfessionals = page === "professionals" ? "text-white" : colorProfessionals;
    return (
        <nav className="bg-relish/60 p-3 w-full flex align-center justify-evenly relative z-30 backdrop-blur-lg ">
            <Link href="/dashboard/search" passHref>
                <a className={ "flex flex-col items-center justify-center w-1/3 " + colorSearch}>
                    <AiOutlineCompass className="" />
                    <span>Search</span>
                </a>
            </Link>
            <Link href="/dashboard/chat-list" passHref>
                <a className={"flex flex-col items-center justify-center w-1/3 " + colorChat}>
                    <BsChatLeftText />
                    <span>Chat</span>
                </a>
            </Link>
            <Link href="/dashboard/professionals" passHref>
                <a className={"flex flex-col items-center justify-center w-1/3 " + colorProfessionals}>
                    <BiBook />
                    <span>Professionals</span>
                </a>
            </Link>
        </nav>
    );
}