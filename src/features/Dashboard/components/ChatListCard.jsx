import Card from './Card'
import { BsChevronRight } from "react-icons/bs"

const ChatListCard = ({ username, tagline, onClick }) => {
 return (
     <div className="hover:cursor-pointer">
        <Card>
            <div onClick={onClick} className="p-4 flex justify-between items-center">
                <div className="flex-col">
                    <h2 className="font-quirky font-extrabold">{username}</h2>
                    <p className="text-katowice">{tagline}</p>
                </div>
                <div className="w-min-1rem">
                    <BsChevronRight />
                </div>
            </div>
        </Card>
     </div>
 )
}

export default ChatListCard
