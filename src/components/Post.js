import { FaRegComment, FaHeart } from 'react-icons/fa'


const Post = ({post}) => {
    // <h2 className="time">{post.time}</h2>
    return (

        <center>
            <div className="postDiv">
                <div className="textDiv">
                    <div className="col">
                    <h2 className="postScore rowElement">{post.viralScore}%</h2>   
                    </div>
                    <div className="col">
                    <h2 className="userName rowElement">@{post.user}</h2>
                    </div>
                    <div className="col">
                    <h2 className="postLikes rowElement"><FaHeart className="iconRow"/>{post.likes}</h2>
                    </div>
                    <div className="col">
                    <h2 className="comments rowElement"><FaRegComment className="iconRow"/>{post.comments}</h2>
                    </div>
                </div>
                <img className="postIMG" alt={post.id} src={post.imgURL} />
                <h2 className="postLink"><a className="link" target="_blank" rel="noreferrer" href={'https://' + post.id}>Instagram Link</a></h2>
               
            </div>
        </center>
    )


}


export default Post