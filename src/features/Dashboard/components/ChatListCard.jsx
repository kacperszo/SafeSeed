import Card from './Card';

const ChatListCard = ({username, tagline}) => {
    return (
        <Card>
            <div className='p-4'>
                <h2 className='font-quirky font-extrabold' >{username}</h2>
                <p className="text-katowice" >{tagline}</p>
            </div>
        </Card>
    )
}

export default ChatListCard
