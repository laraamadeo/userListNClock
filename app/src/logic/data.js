export const usersdb = [
    {
        name: "Pedro Picapiedra",
        email: "pedropicapiedra@gmail.com",
        phone: "638947283",
    },
    {
        name: "Vilma Picapiedra",
        email: "vilmapicapiedra@gmail.com",
        phone: "638291835",
    },
    {
        name: "Pablo Mármol",
        email: "pablomarmol@gmail.com",
        phone: "654321098",
    },
    {
        name: "Betty Mármol",
        email: "bettymarmol@gmail.com",
        phone: "6237849382",
    },
]

export const loadUsers = () => {
    return localStorage.usersJSON.length > 4 ? JSON.parse(localStorage.usersJSON) : JSON.parse(usersdb)
}

export const saveUsersInStorage = (users) => {
    localStorage.usersJSON = JSON.stringify(users)
}