import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import LeafImg from "../../../assets/leaves.png";
import Card from "../components/Card"

export default function SearchPage() {
    return (
        <div className="bg-beige h-screen w-full font-mont">
            <div className="flex justify-between p-4">
                <h2 className="text-2xl text-deep-purple font-quirky font-black">
                    SafeSeed
                </h2>
                <div className="w-8">
                    <Profile />
                </div>
            </div>
            <div className="w-4/5 p-3">
                <div>
                    <h1 className="text-3xl font-quirky font-black text-deep-purple mb-3">Discover some new <span className="text-haps">friends</span></h1>
                </div>
                <div className="text-katowice font-medium">
                    We’ve chosen some people in a similar situation to you to help you go through these times. You’re stronger together!
                </div>
            </div>
            <div>

            </div>
            <Navbar page="search"/>
            <img
                className="fixed"
                src={LeafImg.src}
                alt="leaf"/>
            <img
                className="fixed"
                src={LeafImg.src}
                alt="another leaf"/>
        </div>
    );
}