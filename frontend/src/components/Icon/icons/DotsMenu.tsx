import * as React from 'react'
type Props = {
  width?: string | number
  height?: string | number
  color?: string
}
export const DotsMenu = ({
  width = '25',
  height = '25',
  color = 'white',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 25 25'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.5 15C21.1193 15 20 13.8807 20 12.5C20 11.1193 21.1193 10 22.5 10C23.8807 10 25 11.1193 25 12.5C25 13.8807 23.8807 15 22.5 15Z'
        fill='inherit'
      />
      <path
        d='M12.5 15C11.1193 15 10 13.8807 10 12.5C10 11.1193 11.1193 10 12.5 10C13.8807 10 15 11.1193 15 12.5C15 13.8807 13.8807 15 12.5 15Z'
        fill='inherit'
      />
      <path
        d='M2.50001 15C1.11929 15 -3.8147e-06 13.8807 -3.8147e-06 12.5C-3.8147e-06 11.1193 1.11929 10 2.50001 10C3.88073 10 5.00003 11.1193 5.00003 12.5C5.00003 13.8807 3.88073 15 2.50001 15Z'
        fill='inherit'
      />
    </svg>
  )
}
