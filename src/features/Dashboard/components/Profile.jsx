import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

export default function Profile() {
    return (
        <Link href="/dashboard/profile">
            <a className="">
              <AiOutlineUser />
            </a>
        </Link>
    );
}