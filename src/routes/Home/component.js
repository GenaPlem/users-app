import {Link} from "react-router-dom";

import './styles.css'

const Home = () => {
    return (
        <>
            <main>
                <h1>Welcome to UsersApp</h1>
                <p>This is a users app with reactrouter</p>
            </main>
            <nav>
                <Link to="users">Users</Link>
            </nav>
        </>
    )
}

export default Home;