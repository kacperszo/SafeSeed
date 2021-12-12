import Card from './Card'

const ChatListCard = ({ username, tagline, onClick }) => {
 return (
     <div className="hover:cursor-pointer">
        <Card>
        <div onClick={onClick} className="p-4">
        <h2 className="font-quirky font-extrabold">{username}</h2>
        <p className="text-katowice">{tagline}</p>
        </div>
        </Card>
     </div>
 )
}

export default ChatListCard
