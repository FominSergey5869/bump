import * as React from 'react'
type Props = {
  width?: string | number
  height?: string | number
  color?: string
}
export const Close = ({
  width = '16',
  height = '16',
  color = 'white',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        y='1.41406'
        width='2'
        height='19.2166'
        transform='rotate(-45 0 1.41406)'
      />
      <rect
        x='1.41406'
        y='15.0024'
        width='2'
        height='19.2166'
        transform='rotate(-135 1.41406 15.0024)'
      />
    </svg>
  )
}
