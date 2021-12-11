import Link from "next/link";
import Profile from './Profile';

const Topbar = ({disabled}) => {
    const disabled_style = disabled ? "hidden" : "";

    return (
        <div className="flex justify-between p-4 relative z-30">
            <Link href="/dash" passHref>
                <a>
                    <h2 className="text-2xl text-deep-purple font-quirky font-black">
                        SafeSeed
                    </h2>
                </a>
            </Link>
            <div className={"w-8 text-2xl " + disabled_style}>
                <Profile />
            </div>
        </div>
    )
}

export default Topbar
