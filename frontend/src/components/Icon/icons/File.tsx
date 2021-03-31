import * as React from 'react'
type Props = {
  width?: string | number
  height?: string | number
  color?: string
}
export const File = ({
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
          d='M4.14062 20.1614H15.8594C16.8287 20.1614 17.6172 19.3772 17.6172 18.4133V6.09928H13.5156C12.5463 6.09928 11.7578 5.31515 11.7578 4.35124V0.272461H4.14062C3.17133 0.272461 2.38281 1.0566 2.38281 2.02051V18.4133C2.38281 19.3772 3.17133 20.1614 4.14062 20.1614ZM6.48438 8.46886H13.5156C13.8395 8.46886 14.1016 8.72947 14.1016 9.05154C14.1016 9.37361 13.8395 9.63422 13.5156 9.63422H6.48438C6.16051 9.63422 5.89844 9.37361 5.89844 9.05154C5.89844 8.72947 6.16051 8.46886 6.48438 8.46886ZM6.48438 10.7996H13.5156C13.8395 10.7996 14.1016 11.0602 14.1016 11.3823C14.1016 11.7043 13.8395 11.965 13.5156 11.965H6.48438C6.16051 11.965 5.89844 11.7043 5.89844 11.3823C5.89844 11.0602 6.16051 10.7996 6.48438 10.7996ZM6.48438 13.1303H13.5156C13.8395 13.1303 14.1016 13.3909 14.1016 13.713C14.1016 14.0351 13.8395 14.2957 13.5156 14.2957H6.48438C6.16051 14.2957 5.89844 14.0351 5.89844 13.713C5.89844 13.3909 6.16051 13.1303 6.48438 13.1303ZM6.48438 15.461H11.1719C11.4957 15.461 11.7578 15.7217 11.7578 16.0437C11.7578 16.3658 11.4957 16.6264 11.1719 16.6264H6.48438C6.16051 16.6264 5.89844 16.3658 5.89844 16.0437C5.89844 15.7217 6.16051 15.461 6.48438 15.461Z'
          fill='white'
        />
        <path
          d='M13.5156 4.93382H17.2739L12.9297 0.61377V4.35113C12.9297 4.67262 13.1923 4.93382 13.5156 4.93382Z'
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