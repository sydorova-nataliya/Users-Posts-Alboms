// import { Link } from "react-router-dom";

// import { calculatePopularity, convertDate, generateImageUrl, generateHref } from '../../../../../helpers/utils';

import './styles.scss'

const User=({ id, name, username, email, address:{street,suite, city, zipcode,geo:{lat, lng}},phone,website,company:{name:companyName}})=>{

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
      </div>
    </>
  );
}

export default User;
