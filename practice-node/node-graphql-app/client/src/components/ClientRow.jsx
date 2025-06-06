import React from 'react'
import {FaTrash} from 'react-icons/fa'
export default function ClientRow({client}) {
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className='btn btn-dnager btn-sm'>
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}
