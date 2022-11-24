import {Link} from "react-router-dom";
import {useState} from "react";

import FormikForm from "../../forms/FormikForm";
import Post from "./Post";

import './styles.css'
import EmptyPosts from "./EmptyPosts";



const Posts = () => {
    const [posts, setPosts] = useState([])
    return (
        <>  <h1>Posts</h1>
            <Link to='/'>Back to Home</Link>
            <div className="container">
                <FormikForm posts={posts} setPosts={setPosts}/>
            </div>
            { posts.length === 0 ? <EmptyPosts/> : posts.map(post => (
                    <Post {...post} key={Math.random().toString(36).substring(2, 15)}/>
                )
            )}
        </>
    )
}

export default Posts;