import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {
  FiChevronRight,
} from 'react-icons/fi'

const Item = ({url, icon, title, badge, items}) => {
  const [hidden, setHidden] = useState(true)
  let location = useLocation()
  let {pathname} = {...location}
  let active = pathname === url ? true : false
  if(pathname === '/' && url === '/dashboard') {
    active = true
  } 
  if(pathname === '/' && url !== '/dashboard') {
    active = false
  } 
  if (items.length === 0) {
    return (
      <Link to={url} className={`left-sidebar-item ${active ? 'active' : ''}`}>
        {icon}
        <span className="title">{title}</span>
      </Link>
    )
  }
  return (
    <button
      onClick={() => setHidden(!hidden)}
      className={`left-sidebar-item ${active ? 'active' : ''} ${
        hidden ? 'hidden-sibling' : 'open-sibling'
      }`}>
      {icon}
      <span className="title">{title}</span>
      <FiChevronRight className="ml-auto arrow" />
    </button>
  )
}

export default Item
