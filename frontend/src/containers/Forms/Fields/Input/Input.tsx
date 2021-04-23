import { FieldRenderProps } from 'react-final-form'

import css from './Input.module.scss'

type Props = FieldRenderProps<string, any>
const Input = ({ input, meta, ...rest }: Props) => {
  return (
    <>
      <input  className={css.input} {...input} {...rest} />
    </>
  )
}

export default Input
