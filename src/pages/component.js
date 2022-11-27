import {Route, Routes} from "react-router-dom";

import Home from "../routes/Home";
import Users from "../routes/Users";
import User from "../routes/Users/User";
import Error from "../routes/Error";
import Posts from "../routes/Posts";

const Invoices = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='users/:userid' element={<User/>} />
        <Route path='posts' element={<Posts/>} />
        <Route path='*' element={<Error />} />
    </Routes>
)

export default Invoices