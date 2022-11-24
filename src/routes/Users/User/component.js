import {Link, useParams} from "react-router-dom";

import useGetData from "../../../hooks/useGetData";

import './styles.css'

const User = () => {
    const {userid} = useParams();

    const user = useGetData(`https://jsonplaceholder.typicode.com/users/${userid}`)
    if(user.length === 0) return
    const {name, username, email, phone, address: {city, street, suite}, company} = user
    return (
        <div className="container">
            <div className='user-card'>
                <h1 className='user__name'>Info about: {name}</h1>
                <h2 className='user__username'>Username: {username}</h2>
                <div className='user__info'>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Phone number:</b> {phone}</p>
                    <p><b>Address:</b> {city}, {street} ,{suite}</p>
                    <p><b>Company:</b> {company.name}</p>
                </div>
                <Link to="/users">back to Users</Link>
            </div>
        </div>
    )
}

export default User;