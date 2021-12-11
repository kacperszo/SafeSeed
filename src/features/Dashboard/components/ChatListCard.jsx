import Card from './Card';

const ChatListCard = ({username, latestMessage}) => {
    return (
        <Card>
            <div className='p-4'>
                <h2 className='font-quirky font-extrabold' >{username}</h2>
                <p className="text-katowice" >{latestMessage}</p>
            </div>
        </Card>
    )
}

export default ChatListCard
