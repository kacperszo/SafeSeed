import HeaderBg from "../assets/header-bg.png";

const QuestionareHeader = ({ label, title, sidenote = "" }) => {
    return (
        <div className="h-48 min-h-40 w-full relative overflow-hidden font-mont">
            <div className="relative h-full z-30 p-4 text-white flex flex-col items-start justify-center">
                <p>{label}</p>
                <h1 className="text-2xl font-black font-quirky mt-2 mb-2">
                    {title}
                </h1>
                {sidenote && (
                    <p className="text-gray-200 text-xs">{sidenote}</p>
                )}
            </div>

            <div className="absolute w-full h-full bg-relish opacity-70 z-20 backdrop-blur-3xl top-0 left-0"></div>
            <img
                src={HeaderBg.src}
                className="z-10 absolute bottom-0 left-0 object-cover w-full h-full"
            />
        </div>
    );
};

export default QuestionareHeader;
