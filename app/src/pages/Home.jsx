import { useEffect, useState } from "react"
import Header from "../components/Header"
import { loadUsers } from '../logic/data'
import UserItem from "../components/UserItem"

export default () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        const usersJ = loadUsers()
        setUsers(usersJ)
    }, [])

    return <>
        <div className="w-full h-screen">
            <div className="w-full px-10 py-10 flex flex-col gap-4">
                {users?.map(user => {
                    return <>
                        <UserItem name={user.name} email={user.email} phone={user.phone} />
                        <div className="bg-gray-300 h-[1px] w-full"></div>
                    </>
                })}
            </div>
        </div>
    </>
}