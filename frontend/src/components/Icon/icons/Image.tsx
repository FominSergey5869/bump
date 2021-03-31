import * as React from 'react'
type Props = {
  width?: string | number
  height?: string | number
  color?: string
}
export const Image = ({
  width = '20',
  height = '21',
  color = 'white',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M17.739 0.89502H2.26204C1.01449 0.89502 0 1.90355 0 3.14563V17.2909C0 18.5315 1.01449 19.539 2.26204 19.539H17.739C18.9865 19.539 19.9999 18.5315 19.9999 17.2909V3.14563C20 1.90355 18.9866 0.89502 17.739 0.89502ZM12.933 4.2421C14.1395 4.2421 15.1179 5.21514 15.1179 6.41481C15.1179 7.61449 14.1394 8.58753 12.933 8.58753C11.7262 8.58753 10.7482 7.61449 10.7482 6.41481C10.7482 5.21514 11.7262 4.2421 12.933 4.2421ZM17.0296 17.4596H9.9998H3.28317C2.67974 17.4596 2.41101 17.0254 2.68303 16.4898L6.43263 9.10431C6.70432 8.56875 7.22211 8.52095 7.58879 8.99745L11.3592 13.8973C11.7258 14.3739 12.3668 14.4144 12.7909 13.9875L13.7133 13.0586C14.1372 12.6317 14.7617 12.6845 15.1076 13.176L17.4961 16.5687C17.8413 17.0609 17.633 17.4596 17.0296 17.4596Z'
          fill='inherit'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect
            width='20'
            height='19.8889'
            fill='inherit'
            transform='translate(0 0.272461)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}