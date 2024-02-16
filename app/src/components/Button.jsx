export default ({ onclick, label }) => {

    return <>
        <p onClick={onclick} className="bg-gray-300 font-bold p-2 rounded-md cursor-pointer">{label}</p>
    </>
}