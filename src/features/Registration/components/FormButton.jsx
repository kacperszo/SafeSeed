const FormButton = ({ label, onClick, type }) => (
    <button
        className="p-4 w-full font-quirky text-white font-extrabold bg-deep-purple rounded-lg"
        onClick={onClick}
        type={type}
    >
        {label}
    </button>
);
export default FormButton;
