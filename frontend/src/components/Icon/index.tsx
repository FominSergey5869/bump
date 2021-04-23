import { Close } from './icons/Close'
import { Emoji } from './icons/Emoji'
import { Image } from './icons/Image'
import { File } from './icons/File'
import { DotsMenu } from './icons/DotsMenu'
import { Logo } from './icons/Logo'
type Props = {
  name: string
  width?: string
  height?: string
  color?: string
}
const Icon = ({ name, width, height, color }: Props) => {
  return (
    <>
      {name === 'close' && <Close {...{ width, height, color }} />}
      {name === 'emoji' && <Emoji {...{ width, height, color }} />}
      {name === 'image' && <Image {...{ width, height, color }} />}
      {name === 'file' && <File {...{ width, height, color }} />}
      {name === 'dotsMenu' && <DotsMenu {...{ width, height, color }} />}
      {name === 'logo' && <Logo {...{ width, height }} />}
    </>
  )
}

export default Icon
