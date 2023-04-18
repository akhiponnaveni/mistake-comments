// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment} = props
  const {name, comment, isActive, id} = commentDetails

  const likeblue =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const likenormal =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const ImageUrl = isActive ? likeblue : likenormal

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-main-container">
      <div className="comment-container">
        <p className="color amber">{name[0]}</p>

        <div>
          <p className="Name">{name}</p>
          <p className="Comment">{comment}</p>
        </div>
      </div>
      <div className="Items-images">
        <img src={ImageUrl} alt="like" />
        <button type="button">Like</button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          alt="delete"
          className="Delete"
          data-testid="delete"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}
export default CommentItem
