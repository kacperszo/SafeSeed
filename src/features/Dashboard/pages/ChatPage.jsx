import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import {
 AiOutlineArrowLeft,
 AiOutlineHeart,
 AiOutlineFlag,
 AiOutlineSend,
} from 'react-icons/ai'
import { io } from 'socket.io-client'
import ChatMessage from '../components/ChatMessage'
import { backendUrl, getChat } from '../api/chatApi'
import { useUser } from '../../auth'

const ChatPage = () => {
 const router = useRouter()
 const { id } = router.query
 const socket = useRef(io('http://localhost:3000'))
 const user = useUser()
 const [messages, setMessages] = useState([])
 const [input, setInput] = useState('')
 const [conversationTitle, setConversationTitle] = useState('')
 const { userData } = useUser()

 useEffect(() => {
  if (!router.isReady) return
  getChat(id).then((res) => {
   //It's pretty hackish, but it works
   res.users.forEach((user) => {
    if (user.id !== userData.id) {
     setConversationTitle(user.nickname)
    }
   })
   setMessages(
    [
     ...res.msgs.map((msg) => ({
      key: msg.createdAt,
      text: msg.message,
      incoming: msg.author.id !== userData.id,
     })),
    ].reverse()
   )
   socket.current = io('http://localhost:3000')
   socket.current.on(id, (msg) => {
    setMessages((old) => [
     {
      key: msg.createdAt,
      text: msg.message,
      incoming: msg.author.id !== userData.id,
     },
     ...old,
    ])
   })
  })

  socket.current.on('connect', () => console.log(user))
 }, [router.isReady])

 return (
  <div className="h-screen max-h-screen w-full bg-beige flex flex-col font-mont">
   <nav className="p-4 flex justify-between text-deep-purple">
    <div className="flex items-center space-x-2 ">
     <span className="text-xl">
      <AiOutlineArrowLeft />
     </span>
     <h2 className="font-quirky font-black text-2xl">{conversationTitle}</h2>
    </div>
    <div className="flex text-3xl items-center space-x-1">
     <AiOutlineHeart />
     <AiOutlineFlag />
    </div>
   </nav>
   <div
    style={{
     height: '80vh',
     overflowY: 'scroll',
    }}
    className="flex-grow flex-col-reverse flex p-4"
   >
    {messages.map(({ key, text, incoming }) => (
     <ChatMessage key={key} message={text} incoming={incoming} />
    ))}
   </div>
   <div className="bg-relish/60 p-4">
    <form className="w-full flex justify-between">
     <input
      placeholder="Message"
      className="flex-grow rounded-full mr-2 pl-4 focus:ring-4 focus:outline-none"
      value={input}
      onChange={(e) => setInput(e.target.value)}
     ></input>
     <button
      onClick={(evt) => {
       if (input.length > 0) {
        socket.current.emit('msgToServer', {
         chatroomId: id,
         userId: userData.id,
         message: input,
        })
       }
      }}
      type="button"
      className="rounded-full w-12 h-12 bg-white flex justify-center items-center"
     >
      <AiOutlineSend />
     </button>
    </form>
   </div>
  </div>
 )
}

export default ChatPage
