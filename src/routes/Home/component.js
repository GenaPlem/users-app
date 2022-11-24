import {Link} from "react-router-dom";

import './styles.css'

const Home = () => {
    return (
        <>
            <main>
                <h1>Welcome to UsersApp</h1>
                <p>This is a users app with ReactRouter</p>
            </main>
            <nav>
                <Link to="users">CLICK here to render Users</Link> { '  |  ' }
                <Link to='posts'>Posts</Link>
            </nav>
        </>
    )
}

export default Home;