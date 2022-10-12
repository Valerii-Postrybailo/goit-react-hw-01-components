import PropTypes from 'prop-types';
import defaultImg from 'img/default_avatar.jpg'
import css from './Profile.module.css'

export default function Profile (props){

  const {avatar = defaultImg, username, tag, location, stats} = props;
  
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar ?? defaultImg}
            alt="User avatar"
            className={css.avatar}/>
          <p className={css.name +' '+ css.profile__item}>{username}</p>
          <p className={css.tag +' '+ css.profile__item} >{tag}</p>
          <p className={css.location +' '+ css.profile__item}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired]),

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}
