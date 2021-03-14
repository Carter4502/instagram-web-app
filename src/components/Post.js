import { FaHeart } from 'react-icons/fa'

const Post = ({post}) => {

    return (

        <center>
            <div className="postDiv">
                    <a className="postLink" target="_blank" rel="noreferrer" href={'https://' + post.id}>Post Link</a>
                    <div className="likesDiv">
                        <h2 className="postLikes">{post.likes}</h2>
                        <FaHeart color="#ff6961" size="1.2rem"/>
                    </div>
                    <h2 className="postScore">{post.viralScore + "%"}</h2>
                <img className="postIMG" alt={post.id} src={post.imgURL} width="500" height="500"/>
            </div>
        </center>
    )


}


export default Post