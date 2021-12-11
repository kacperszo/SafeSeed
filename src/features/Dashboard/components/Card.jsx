export default function Card({children}) {
    return (
      <div className="bg-white/80 backdrop-blur-md w-9/10 rounded-lg relative z-20">
          {children}
      </div>
    );
}