import QuestionareHeader from "./../components/QuestionareHeader";
import FormButton from "./../components/FormButton";
import FormCheckboxItem from "../components/FormCheckboxItem";
import {useRouter} from "next/router"

const GoalsPage = () => {
    const router = useRouter()
    return (
        <div className="h-screen max-h-screen bg-beige w-full flex flex-col overflow-hidden">
            <QuestionareHeader
                label="Okay, now’s the 
                good part
                "
                title="What would you like to achieve"
            />
            <div className="flex-1 flex flex-wrap overflow-y-scroll p-4 gap-4">
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
            </div>
            <div className="rounded-t-lg border-t border-gray-200">
                <div className="h-36 p-4 mb-2">
                    <h2 className="text-lg font-quirky font-black text-deep-purple">
                        Something else:
                    </h2>
                    <textarea
                        className="w-full p-4 h-full border border-deep-purple rounded-lg bg-transparent"
                        placeholder="Your dreams and wishes"
                    />
                </div>
                <div className="p-4">
                    <FormButton onClick={()=>{
                        router.push("/register/")
                    }} label="Let’s start this journey" />
                </div>
            </div>
        </div>
    );
};

export default GoalsPage;
