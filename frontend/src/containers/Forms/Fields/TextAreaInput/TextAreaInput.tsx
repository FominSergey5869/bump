import React from 'react'
import { FieldRenderProps } from 'react-final-form'

import css from './TextAreaInput.module.scss'

type Props = FieldRenderProps<string, any>

const TextAreaInput: React.FC<Props> = ({
  input,
  meta,
  minHeight = '118px',
  ...rest
}: Props) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = minHeight
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + 'px'
    }
  }, [input.value, minHeight])
  return (
    <>
      <textarea
        ref={textareaRef}
        className={css.textarea}
        {...input}
        {...rest}
      />
      {/* <div>{meta.touched && meta.error}</div> */}
    </>
  )
}

export default TextAreaInput
