import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
type Props = {
  children: React.ReactNode
  id?: string
  el?: string
}

const Portal = ({ children, id = 'root-portal', el = 'div' }: Props) => {
  const portalRef = React.useRef(document.createElement(el))

  const container = portalRef.current

  container.classList.add(id)

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}
export default Portal
