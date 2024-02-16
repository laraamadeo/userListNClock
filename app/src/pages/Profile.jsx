import { useState } from "react"
import Button from "../components/Button"
import { loadUsers, saveUsersInStorage } from "../logic/data"

export default () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const onAddUser = () => {
        const users = loadUsers()
        const user = { name, email, phone }
        users.push(user)
        saveUsersInStorage(users)
        alert(`User with name: ${name}, email: ${email} and phone: ${phone} was added successfully!`)
    }
    return <>
        <form className="w-[50%] h-screen mx-auto mt-6">
            <div className="flex flex-col gap-1 w-full  items-start rounded-md">
                <p>Name</p>
                <input className="bg-gray-200 border w-full" onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div className="flex flex-col gap-1 w-full  items-start rounded-md">
                <p>Email</p>
                <input className="bg-gray-200 border w-full" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className="flex flex-col gap-1 w-full  items-start rounded-md mb-6">
                <p>Phone</p>
                <input className="bg-gray-200 border w-full" onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <Button label={"Add user"} onclick={onAddUser} />
        </form>
    </>
}