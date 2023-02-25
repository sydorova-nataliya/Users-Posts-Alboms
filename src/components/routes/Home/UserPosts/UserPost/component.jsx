import './styles.scss'

const UserPost=({ id, title, body})=>{

  return (
    <>
      <div className="post__wrapper">
      <span className='post__id'>{id}</span>
        <h4 className='post__title'><b>Title:</b> {title}</h4>
        <p className='post__body'>{body}</p>
      </div>
    </>
  );
}

export default UserPost;
