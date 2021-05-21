import { MouseEvent, useCallback, useRef } from 'react'
import { FieldRenderProps } from 'react-final-form'
import Icon from '../../../../components/Icon'

import css from './MultipleImg.module.scss'

type FileObj = {
  url: string
  file: File
}
type Props = FieldRenderProps<FileObj[]>
const MultipleImg = ({ input: { value, onChange }, meta, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleChange = useCallback(
    (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0]
      if (file) {
        const fileObj = new Blob([file])
        onChange([...value, { url: URL.createObjectURL(fileObj), file }])
      }
    },
    [value, onChange]
  )

  const deleteImage = (url: string) => {
    onChange(value.filter((item) => url !== item.url))
  }

  return (
    <>
      <input
        type='file'
        ref={inputRef}
        className={css.input}
        onChange={handleChange}
        hidden
      />

      <div className={css.preview}>
        {value.length > 0 &&
          value?.map(({ url }) => (
            <div key={url} className={css.preview__item}>
              <button
                className={css.preview__item__delete}
                onClick={() => deleteImage(url)}
              >
                <Icon name='close' width='12' height='12' color='black' />
              </button>
              <div className={css.preview__item__img}>
                <img src={url} alt='preview' />
              </div>
            </div>
          ))}
        <button className={css.button} onClick={handleClick}>
          <Icon name='file' width='30' height='30' />
        </button>
      </div>
    </>
  )
}

export default MultipleImg
