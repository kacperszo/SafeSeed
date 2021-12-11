
import Profile from './Profile';
const Topbar = () => {
    return (
        <div className="flex justify-between p-4 relative z-30">
                <h2 className="text-2xl text-deep-purple font-quirky font-black">
                    SafeSeed
                </h2>
                <div className="w-8 text-2xl">
                    <Profile />
                </div>
            </div>
    )
}

export default Topbar
