const FormInput = ({ onChange, name, value, type, label, placeholder }) => {
    return (
        <label className="text-katowice">
            <p className="mb-2 text-sm font-semibold">{label}</p>
            <input
                className="border-katowice border p-4 rounded-lg w-full bg-transparent"
                onChange={onChange}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
            />
        </label>
    );
};

export default FormInput;
