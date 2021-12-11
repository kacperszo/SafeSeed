import clsx from 'clsx'

const ChatMessage = ({ incoming, message }) => {
 return (
  <div
   className={clsx('bg-white text-black p-4 w-56 rounded-xl mb-1 mt-1', {
    'rounded-bl-none self-start mr-auto': incoming,
    'ml-auto rounded-br-none': !incoming,
   })}
  >
   {message}
  </div>
 )
}

export default ChatMessage
