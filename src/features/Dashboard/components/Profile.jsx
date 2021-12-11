import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

export default function Profile() {
    return (
        <Link href="/dash/options">
            <a>
                <div className="h-full flex items-center justify-center">
                    <AiOutlineUser className="h-full" />
                </div>
            </a>
        </Link>
    );
}