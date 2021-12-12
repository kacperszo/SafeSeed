import LeafImg from "../../../assets/leaf-1.png";
import Link from "next/link";

export default function StartPage() {
    return (
        <div className="relative overflow-hidden bg-beige h-full w-full font-mont">
            <div className="flex justify-center p-4">
                <h1 className="text-2xl text-deep-purple font-quirky font-black">
                    SafeSeed
                </h1>
            </div>

            <div className="flex flex-col p-4 pr-12 pl-12 z-20 relative">
                <h2 className="text-3xl text-deep-purple ">Welcome to</h2>
                <h1 className="text-3xl font-quirky font-black text-deep-purple">
                    SafeSeed
                </h1>
                <p className="text-katowice mb-8 mt-4 text-md">
                    Adipisicing pariatur minim laboris tempor voluptate ad minim
                    et ipsum.
                </p>
                <Link href="/register" passHref>
                    <a className="bg-haps hover:bg-govtech p-3 transition-all text-white font-quirky font-black rounded-lg text-center">
                        Register
                    </a>
                </Link>
                <Link href="/login" passHref>
                <a className="p-3 hover:underline font-semibold text-deep-purple text-center">
                    Login
                </a>
                </Link>
            </div>
            {/*<div className="p-4 pr-12 pl-12 absolute bottom-0 z-20 w-full">*/}
            {/*    <div className="bg-katowice backdrop-blur-lg bg-opacity-40 h-20 flex items-center rounded-lg p-8 w-full">*/}
            {/*        <span className="text-white font-semibold font-quirky">*/}
            {/*            I&apos;m a:*/}
            {/*        </span>*/}
            {/*        <select className="bg-transparent text-white ml-3">*/}
            {/*            <option className="text-black">User</option>*/}
            {/*            <option className="text-black">Psychologist</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <img
                className="absolute bottom-0 right-0 z-10"
                src={LeafImg.src}
                alt="test"
            />
        </div>
    );
}
