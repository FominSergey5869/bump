import * as React from 'react'
type Props = {
  width?: string | number
  height?: string | number
  color?: string
}
export const Emoji = ({
  width = '22',
  height = '23',
  color = 'white',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 23'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M11 0.277832C4.92486 0.277832 0 5.17533 0 11.2167C0 17.2581 4.92486 22.1556 11 22.1556C17.0751 22.1556 22 17.2581 22 11.2167C21.9935 5.17803 17.0724 0.284287 11 0.277832ZM11 20.5929C5.79272 20.5929 1.57141 16.395 1.57141 11.2167C1.57141 6.03837 5.79272 1.84051 11 1.84051C16.2072 1.84051 20.4285 6.03837 20.4285 11.2167C20.4229 16.3927 16.2049 20.5873 11 20.5929Z'
          fill='inherit'
        />
        <path
          d='M7.07141 11.2167C7.93928 11.2167 8.64282 10.517 8.64282 9.65399C8.64282 8.79095 7.93928 8.09131 7.07141 8.09131C6.20355 8.09131 5.5 8.79095 5.5 9.65399C5.5 10.517 6.20355 11.2167 7.07141 11.2167Z'
          fill='inherit'
        />
        <path
          d='M14.9285 11.2167C15.7964 11.2167 16.4999 10.517 16.4999 9.65399C16.4999 8.79095 15.7964 8.09131 14.9285 8.09131C14.0607 8.09131 13.3571 8.79095 13.3571 9.65399C13.3571 10.517 14.0607 11.2167 14.9285 11.2167Z'
          fill='inherit'
        />
        <path
          d='M14.0088 13.857C13.7493 13.5112 13.257 13.4401 12.9092 13.6982C12.8941 13.7094 12.8795 13.721 12.8653 13.7333C11.7542 14.5403 10.2458 14.5403 9.13472 13.7333C8.80642 13.4511 8.31022 13.487 8.02649 13.8135C7.74271 14.1399 7.77885 14.6334 8.10715 14.9155C8.12133 14.9278 8.13597 14.9394 8.15102 14.9506C9.83284 16.2289 12.1672 16.2289 13.849 14.9506C14.1968 14.6925 14.2684 14.2029 14.0088 13.857Z'
          fill='inherit'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect
            width='22'
            height='21.8778'
            fill='inherit'
            transform='translate(0 0.277832)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}