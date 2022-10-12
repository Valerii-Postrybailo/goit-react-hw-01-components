import PropTypes from 'prop-types';
import defaultImg from 'img/default_avatar.jpg'
import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'


export default function FriendList ({friends}){
  return(
  <ul className={css.friend__list}>
    {friends.map(({id, avatar  = defaultImg, name, isOnline}) => (
      <FriendListItem
        key = {id}
        avatar = {avatar ?? defaultImg}
        name = {name}
        isOnline = {isOnline}
      />
    ))}
  </ul>)
}

FriendList.propTypes = { 
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired]),
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })),
}
