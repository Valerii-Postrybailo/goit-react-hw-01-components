import css from './FriendListItem.module.css'

export default function FriendList ({id, isOnline, avatar, name}){
  return(
    <li key = {id} className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}