import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../../shared/Modal/component";

import './styles.scss'

const User=({ id, name, username, email, address:{street,suite, city, zipcode,geo:{lat, lng}},phone,website,company:{name:companyName}})=>{

  const [modatActive, setModalActive] =useState(false);
  const [albums, setAlbums] =useState([]);


  return (
    <>
      <div className="user__wrapper">
      <h2 className='user__name'>{name}</h2>
        <h3 className='user__username'>User name: {username}</h3>
        <p className='user__company'><span className='subtitle'>Companny: </span>{companyName}</p>
        <span className='user__id'>{id}</span>
        <a href={`mailto:${email}`} className='user__email'><b> Email:</b> {email}</a><br />
        <a href={`tel:${phone}`} className='user__phone'><b>Phone:</b> {phone}</a>
        <p><a href="#" className='user__website'>{website}</a></p>
        <p className='user__address'>{street}, {suite}, {city}</p>
        <p className='user__address'>{zipcode}</p>
        <p className='user__address'>Geo: {lat}, {lng}</p>

        <Link to={`/posts/:userId=${id}`} className="user__posts">Posts of user</Link><br />
        <button className="user__open-albums" onClick={()=>{
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
                .then(res=>res.json())
                .then(data=>setAlbums(data))
            setModalActive(true)
          }
          }>Albums</button>
        <Modal active={modatActive} setActive={setModalActive}>
            {
              albums.length===0 ? 'Loading...' :
              albums.map((album)=> {
              return <h5 className="album">{album.id} - {album.title}</h5> 
              })
            }
        </Modal>
      </div>
    </>
  );
}

export default User;
