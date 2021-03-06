import PostListItem from "../PostListItem"
import "./PostList.css"

const PostList = ({posts}) => {

    const elements = posts.map(item => (
        <li key={item.id} className="list-group-item">
            <PostListItem 
                // label={item.label} 
                // important={item.important} 
                {...item}
                id={item.id}
            />
        </li>
    ))

    return (
        <ul className="app-list list-group">
            {/* <PostListItem label={posts[0].label} important={posts[0].important} /> BU JUDA ESKI YUL */} 
            {elements}
        </ul>
    )
}

export default PostList