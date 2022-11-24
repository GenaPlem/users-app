import './styles.css'

const Post = ({ userId, title, body }) => {
    return (
            <div className= 'post__card elem'>
                <div className = 'post__box'>
                    <div className = 'post__content'>
                        <h1>{userId}</h1>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
)
}

export default Post;