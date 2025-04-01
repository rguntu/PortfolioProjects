"use client"
import React from 'react'
import {useState, useEffect} from "react"
type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string

}
function UsersClient() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchUsers() {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok) throw new Error("Failure")
                const data = await response.json()
                setUsers(data)
            } catch(err) {
                if(err instanceof Error) {
                    setError("Failed: ${err.message}")
                } else {
                    setError("Failed")
                }
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>
  return (
   <ul className='space-y-4 p-4'>

    {users.map(u => (
        <li
        key={u.id}
        className="p-4 bg-white shadow-md rounded-lg text-grey-700">
            {u.name} ({u.email})
        </li>
    ))}

   </ul>
  )
}

export default UsersClient