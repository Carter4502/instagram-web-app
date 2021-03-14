import Post from './Post'

const PostList = ({postList}) => {
    return (
        <div className="cards">
           {postList.map((post) => <Post post={post} />)}
        </div>
    )
}

export default PostList