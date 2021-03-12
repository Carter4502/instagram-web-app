import Post from './Post'

const PostList = ({postList}) => {
    return (
        <div>
           {postList.map((post) => <Post post={post} />)}
        </div>
    )
}

export default PostList