import {Link, useParams} from "react-router-dom";
import useGetData from "../../../hooks/useGetData";

const User = () => {
    const {userid} = useParams();

    const {name, username, email, phone, address: {city, street}} = useGetData(`https://jsonplaceholder.typicode.com/users/${userid}`)

    return (
        <>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{city}, {street}</p>
            <Link to="/users">back to Users</Link>
        </>
    )
}

export default User;