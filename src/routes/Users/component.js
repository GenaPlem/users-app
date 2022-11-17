import {Link} from "react-router-dom";

import useGetData from "../../hooks/useGetData";

import './styles.css'

const Users = () => {

    const users = useGetData('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <div>
                <h1>Users</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div className="container">
            {users.map(({id, name, email, address: {city}, phone}) => (
                <div className = 'card elem' key={id}>
                    <div className = 'box'>
                        <div className = 'content'>
                            <h3>{name}</h3>
                            <p>Email: {email}</p>
                            <p>Address: {city}</p>
                            <p>Phone: {phone}</p>
                            <Link to={`/users/${id}`} key={id}>Details</Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Users;