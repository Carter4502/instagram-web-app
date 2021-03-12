
const Post = ({post}) => {

    return (

        <center>
            <div className="postDiv">
            <img className="postIMG" alt={post.id} src={post.imgURL} />
            <h2 className="post">{post.viralScore}</h2>
            <a className="postLink" target="_blank" rel="noreferrer" href={'https://' + post.id}>Link</a>
            <h2 className="postLikes">{post.likes}</h2>
            </div>
        </center>
    )


}


export default Post