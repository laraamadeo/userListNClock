export default ({ name, email, phone }) => {
    return <>
        <div className="flex flex-col items-start w-full">
            <p className="font-bold">{name}</p>
            <p>{email}</p>
            <p>+34 {phone}</p>
        </div>
    </>
}