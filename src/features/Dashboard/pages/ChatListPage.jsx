import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import LeafImg from '../../../assets/leaf-1.png'
import LeafImg2 from '../../../assets/leaf-2.png'
import ChatListCard from './../components/ChatListCard'
import { useQuery } from 'react-query'
import { getChatList } from '../api/chatApi'
import { useRouter } from 'next/router'

const ChatListPage = () => {
 const { loading, data } = useQuery('chatlist', getChatList)
 const router = useRouter()
 console.log(data)

 return (
  <div className="relative overflow-hidden flex flex-col h-full h-max-screen bg-beige font-mont">
   <Topbar />
   <div className="p-4 text-deep-purple w-4/5 relative z-30">
    <h1 className="text-3xl font-quirky font-black mb-3">
     Your <span className="text-haps">chats</span>
    </h1>
    <p className="text-katowice font-medium">
     Talk about your day, your issues, and your happy moments!
    </p>
   </div>
   <div className="flex flex-col flex-grow w-full p-4 space-y-3 overflow-y-scroll">
    {
     //map through the data and display the chat list
     data &&
      data.map((chat) => (
       <ChatListCard
        onClick={() => {
         router.push(`/dash/chat/${chat.id}`)
        }}
        key={chat.id}
        username={chat.users[0].nickname}
       />
      ))
    }
   </div>
   <Navbar page="chat-list" />
  <img
      className="absolute -bottom-8 -right-28 scale-[0.75] max-h-screen select-none"
      src={LeafImg2.src}
      alt="leaf"
  />
  <img
      className="absolute -left-36 top-52 scale-[0.70] rotate-[120deg] select-none"
      src={LeafImg.src}
      alt="another leaf"
  />
  </div>
 )
}

export default ChatListPage
