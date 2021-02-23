import React from 'react'
import { Close } from './icons/Close'
type Props = {
  name: string
  width?: string
  height?: string
  color?: string
}
const Icon = ({ name, width, height, color }: Props) => {
  return <>{name === 'close' && <Close {...{ width, height, color }} />}</>
}

export default Icon
