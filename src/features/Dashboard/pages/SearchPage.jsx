import Navbar from "../components/Navbar";
import LeafImg from "../../../assets/leaves.png";
import Topbar from "../components/Topbar";

export default function SearchPage() {
    return (
        <div className="bg-beige h-screen w-full font-mont">
            <Topbar/>
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