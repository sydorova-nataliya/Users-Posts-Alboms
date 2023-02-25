import {useParams, Link } from "react-router-dom";
import {connect} from "react-redux";
import { useEffect } from "react";

import { setPosts } from "../../../../store/users/actions";
import { selectPost } from "../../../../store/users/selector";
import Header from '../../../shared/Header';
import UserPost from "./UserPost";

import './styles.scss';

const UserPosts=({posts, setPosts})=>{ 
  const params = useParams();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId.split('=')[1]}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    return (  
      <>
        <Header/>
        <main>
          
          <section className="posts__holder">
          { 
            posts.length===0 ? 'Loading...' :
            posts.map((post)=> 
            <UserPost key={post.id}{...post}/>)
  
          }
          </section>
        </main>
        <nav className="nav">
            <Link to='/' className="error__btn">Back to Home</Link>
          </nav>
      </>
    )
}

const mapStateToProps = state => ({
  posts: selectPost(state),
})

const mapDispatchToProps = {
  setPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
