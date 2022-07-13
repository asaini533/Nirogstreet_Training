const Select = ({label, option, selected, error, ...property}) => {
    return (
        <>
            <label className="w-full block text-left">{ label }</label>
            <select className="w-full border-gray-300 rounded-lg mt-2 box-border">
                { option }
            </select>
            <div className="text-red-900 mt-2 text-left " >{error}</div>
        </>
    )
}

export default Select