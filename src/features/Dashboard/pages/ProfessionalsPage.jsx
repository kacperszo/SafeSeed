import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import {useQuery} from "react-query";
import { getPsychologists } from "../api/searchApi";
import ChatListCard from "../components/ChatListCard";
import LeafImg2 from "../../../assets/leaf-2.png";
import LeafImg from "../../../assets/leaf-1.png";

const ProfessionalsPage = () => {
    const {data, isLoading} = useQuery("psychologists", getPsychologists)

    return (
        <div className="bg-beige h-screen max-h-screen w-full flex flex-col font-mont">
            <Topbar/>
            <div className="p-4 text-deep-purple w-3/4 relative z-30">
                <h1 className="text-3xl font-quirky font-black mb-3">Contact <span className="text-haps" >Professionals</span></h1>
                <p className="text-katowice font-medium">Professionals can help you better than anyone else</p>
            </div>
            <div className='flex flex-col flex-grow w-full p-4 space-y-3 overflow-y-scroll'>
                {!isLoading && data.map(({nickname, bio, id}) => {
                    return <ChatListCard key={id} username={nickname} tagline={bio} />
                })}
            </div>
            <Navbar/>
            <img
                className="fixed -bottom-8 -right-28 scale-[0.75] max-h-screen"
                src={LeafImg2.src}
                alt="leaf"/>
            <img
                className="fixed -left-36 top-52 scale-[0.70] rotate-[120deg]"
                src={LeafImg.src}
                alt="another leaf"/>
        </div>
    )
}

export default ProfessionalsPage
