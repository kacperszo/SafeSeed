import { Formik } from "formik";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useUser } from "../../auth";
import { loginUser } from "../api/registerApi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import LeafImg from "../../../assets/leaf-1.png"

const LoginPage = () => {
    const router = useRouter();
    const { setUserData, setToken, userData, token } = useUser();
    const { mutateAsync: loginMutate } = useMutation(loginUser, {
        onSuccess(data) {
            setToken(data.token);
            setUserData(data.user);
            router.push("/dash");
        },
    });

    return (
        <div className="h-screen w-full bg-beige p-4 font-mont flex flex-col">
            <div className="flex justify-center p-4">
                <h1 className="text-2xl text-deep-purple font-quirky font-black">
                    SafeSeed
                </h1>
            </div>
            <h1 className="text-3xl font-quirky font-black text-deep-purple">
                Hi, it’s great to
                <br /> see <span className="text-haps">you</span> back
            </h1>
            <p className="text-sm mt-2 w-3/4 text-katowice">
            Log in to get access to your
            conversations
            </p>
            <Formik
                initialValues={{
                    phone: "",
                    password: "",
                }}
                onSubmit={async (values) => {
                    await loginMutate(values);
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
                        className="relative z-20 mt-4 flex flex-1 flex-col space-y-2"
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
                        <div className="flex flex-col pt-2">
                            <FormButton label={"Log in"}></FormButton>
                        </div>
                    </form>
                )}
            </Formik>
            <img
                className="fixed -bottom-20 -left-20 max-h-screen -scale-x-75 scale-75 z-0"
                src={LeafImg.src}
                alt="leaf"/>
        </div>
    );
}

export default LoginPage
