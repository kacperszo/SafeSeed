import QuestionareHeader from "./../components/QuestionareHeader";
import FormButton from "./../components/FormButton";
import FormCheckboxItem from "../components/FormCheckboxItem";
import { useRouter } from 'next/router';
import { useQuery } from "react-query";
import { getTags } from "../api/registerApi";
import { useUser } from "../../auth";

const TraitPage = () => {
    const router = useRouter()
    const {userData} = useUser()
    const {data, isLoading} = useQuery("tags",()=>getTags("problem"))

    console.log(userData)

    return (
        <div className="h-screen max-h-screen bg-beige w-full flex flex-col overflow-hidden">
            <QuestionareHeader
                label="To help you
                we have to know 
                "
                title="What you’re going through"
                sidenote="All of this information will be anonymous"
            />
            <div className="flex-1 flex flex-wrap overflow-y-scroll p-4 gap-4">
                {!isLoading && data.map(({name, id})=><FormCheckboxItem key={id} name={name} label={name} />)}
            </div>
            <div className="p-4">
                <FormButton onClick={()=>{
                    router.push("/register/goals")
                }} label="Let’s talk about something nice now" />
            </div>
        </div>
    );
};

export default TraitPage;
