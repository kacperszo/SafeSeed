import QuestionareHeader from "./../components/QuestionareHeader";
import FormButton from "./../components/FormButton";
import FormCheckboxItem from "../components/FormCheckboxItem";
import { useRouter } from "next/router";
import { useQuery,useMutation } from "react-query";
import { getTags, updateUser } from "../api/registerApi";
import { useUser } from "../../auth";
import { Formik } from "formik";

const TraitPage = () => {
    const router = useRouter();
    const { userData, setUserData } = useUser();
    const { data, isLoading } = useQuery("tags", () => getTags("problem"));
    const { mutateAsync: mutateUser } = useMutation(updateUser, {
        onSuccess(data){
            setUserData(data)
            router.push("/register/goals")
        }
    });

    console.log(userData)

    return (
        <div className="h-full max-h-full bg-beige w-full flex flex-col overflow-hidden">
            <QuestionareHeader
                label="To help you
                we have to know 
                "
                title="What you’re going through"
                sidenote="All of this information will be anonymous"
            />
            {!isLoading && <Formik
            initialValues={()=>{
                let obj = {}
                data.forEach(({name})=>{
                    obj[name] = false
                })
                return obj
            }}
                onSubmit={async (values)=>{
                    let reqTags = []

                    Object.keys(values).forEach((key)=>{
                        if(values[key][0] === "on") {
                            reqTags.push(data.find(({name})=>name === key).id)
                        }
                    })
                    
                    await mutateUser({data:{tags: reqTags}, userId: userData.id})
                }}
            >
                {({
                    handleSubmit,
                    handleChange
                }) => (
                    <form onSubmit={handleSubmit} className="flex-1 flex-col flex overflow-hidden" >
                        <div className="flex-1 flex flex-wrap p-4 gap-4 overflow-y-scroll">
                                {data.map(({ name, id }) => (
                                    <FormCheckboxItem
                                        handleChange={handleChange}
                                        key={id}
                                        name={name}
                                        label={name}
                                    />
                                ))}
                        </div>
                        <div className="p-4">
                            <FormButton
                                type="submit"
                                label="Let’s talk about something nice now"
                            />
                        </div>
                    </form>
                )}
            </Formik>}
        </div>
    );
};

export default TraitPage;
