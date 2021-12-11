import Navbar from "../components/Navbar";
import LeafImg from "../../../assets/leaves.png";
import Topbar from "../components/Topbar";

export default function SearchPage() {
    return (
        <div className="bg-beige h-screen w-full font-mont max-h-screen flex flex-col">
            <Topbar/>
            <div className="w-4/5 p-4">
                <div>
                    <h1 className="text-3xl font-quirky font-black text-deep-purple mb-3">Discover some new <span className="text-haps">friends</span></h1>
                </div>
                <div className="text-katowice font-medium">
                    We’ve chosen some people in a similar situation to you to help you go through these times. You’re stronger together!
                </div>
            </div>
            <div className="flex-grow">

            </div>
            <Navbar page="search"/>
            <img
                className="fixed -bottom-16 -right-16 z-10 scale-80"
                src={LeafImg.src}
                alt="leaf"/>
            <img
                className="fixed bottom-8 -left-40 rotate-[120deg] z-10 scale-75"
                src={LeafImg.src}
                alt="another leaf"/>
        </div>
    );
}