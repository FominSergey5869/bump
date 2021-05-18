import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/user/selectors'
type Props = {}
const UserMenu = (props: Props) => {
  const {username} = useSelector(selectUserData)
  return <div>{username}</div>
}

export default UserMenu
