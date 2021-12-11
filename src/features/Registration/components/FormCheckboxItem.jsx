const FormCheckboxItem = ({ name, label,handleChange }) => {
    return (
        <label className="w-full border border-katowice rounded-lg text-katowice flex items-center p-4">
            <input
                onChange={handleChange}
                type="checkbox"
                name={name}
                className="rounded-full bg-transparent"
            />
            <p className="ml-2">{label}</p>
        </label>
    );
};

export default FormCheckboxItem;
