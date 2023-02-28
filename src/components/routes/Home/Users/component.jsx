import {connect} from "react-redux";
import { useEffect } from "react";

import { setUsers } from "../../../../store/users/actions";
import { selectUsers } from "../../../../store/users/selector";
import User from "./User";
import './styles.scss'


const Users=({users,setUsers })=>{

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUsers(data))
  },[])

  return (
    <div className='users'>
      <section className='users__holder'>
          { 
            users.length===0 ? 'Loading...' :
            users.map((user)=> 
            <User key={user.id}{...user}/>)
          }
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  users: selectUsers(state),
})

const mapDispatchToProps = {
  setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);