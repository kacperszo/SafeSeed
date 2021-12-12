import QuestionareHeader from "./../components/QuestionareHeader";
import FormButton from "./../components/FormButton";
import FormCheckboxItem from "../components/FormCheckboxItem";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import { updateUser, getTags } from "../api/registerApi";
import { Formik } from "formik";
import { useUser } from "../../auth";


const GoalsPage = () => {
    const router = useRouter();
    const {userData,setUserData} = useUser()
    const { data, isLoading } = useQuery("tags", () => getTags("goal"));
    const { mutateAsync: mutateUser } = useMutation(updateUser, {
        onSuccess(data) {
            console.log("data:",data)
            setUserData(data);
            router.push("/dash");
        },
    });
    return (
        <div className="h-full max-h-full bg-beige w-full flex flex-col overflow-hidden">
            <QuestionareHeader
                label="Okay, now’s the 
                good part
                "
                title="What would you like to achieve"
            />

            {!isLoading && (
                <Formik
                    initialValues={() => {
                        let obj = {};
                        data.forEach(({ name }) => {
                            obj[name] = false;
                        });
                        return { ...obj, bio: "" };
                    }}
                    onSubmit={async (values) => {
                        console.log("cokolwiek")
                        let reqTags = [];

                        Object.keys(values)
                            .filter((key) => key !== "bio")
                            .forEach((key) => {
                                if (values[key][0] === "on") {
                                    reqTags.push(
                                        data.find(({ name }) => name === key).id
                                    );
                                }
                            });

                        const userTags = userData.tags.map(t=>t.id)
 
                        await mutateUser({
                            data: {
                                tags: [...userTags, ...reqTags],
                                bio: values.bio,
                            },
                            userId: userData.id,
                        });
                    }}
                >
                    {({ handleSubmit, handleChange }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="flex-1 flex flex-col overflow-hidden"
                        >
                            <div className="flex-1 flex flex-wrap overflow-y-scroll p-4 gap-4">
                                {data.map(({ name, id }) => (
                                    <FormCheckboxItem
                                        handleChange={handleChange}
                                        key={id}
                                        name={name}
                                        label={name}
                                    />
                                ))}
                            </div>
                            <div className="rounded-t-lg border-t border-gray-200">
                                <div className="h-36 p-4 mb-2">
                                    <h2 className="text-lg font-quirky font-black text-deep-purple">
                                        Something else:
                                    </h2>
                                    <textarea
                                        onChange={handleChange}
                                        name="bio"
                                        className="w-full p-4 h-full border border-deep-purple rounded-lg bg-transparent"
                                        placeholder="Your dreams and wishes"
                                    />
                                </div>
                                <div className="p-4">
                                    <FormButton
                                        type="submit"
                                        label="Let’s start this journey"
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default GoalsPage;
