import { Formik } from "formik";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useUser } from "../../auth";
import { registerUser } from "../api/registerApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

export default function RegisterPage() {
    const router = useRouter()
    const {updateUser, setToken} = useUser()
    const {mutate: registerMutate} = useMutation(registerUser)
    const {mutate: loginMutate} = useMutation(loginUser, {
        onSuccess(data){
            setToken(data.token)
            updateUser(data.user)
            router.push("/register/trait")
        }
    })

    return (
        <div className="h-screen w-full bg-beige p-4 font-mont flex flex-col">
            <div className="flex justify-center p-4">
                <h1 className="text-2xl text-deep-purple font-quirky font-black">
                    SafeSeed
                </h1>
            </div>
            <h1 className="text-3xl font-quirky font-black text-deep-purple">
                Hi, it’s great to
                <br /> see <span className="text-haps">you</span> here
            </h1>
            <p className="text-sm mt-2 w-3/4 text-katowice">
                Cupidatat commodo qui deserunt minim ex laborum pariatur amet
                dolore adipisicing non.
            </p>
            <Formik
                initialValues={{
                    phone: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    router.push("/register/trait")
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form
                        className="mt-4 flex flex-1 flex-col space-y-2"
                        onSubmit={handleSubmit}
                    >
                        <FormInput
                            label="Your phone number"
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder={"000-000-000"}
                        />
                        <FormInput
                            label="Your password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder={"Please make sure its safe"}
                        />
                        <div className="flex-1" />
                        <div className="flex flex-col">
                            <label className="space-x-2 mt-auto pb-4">
                                <input type="checkbox" />
                                <span className="text-katowice">
                                    I accept the{" "}
                                    <span className="underline">
                                        Terms of service
                                    </span>
                                </span>
                            </label>
                            <FormButton label={"I'm ready"}></FormButton>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
