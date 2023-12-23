import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Light = tw(SunIcon)`
  w-[20px] group-hover:rotate-90 transition-all duration-1000
`

const Dark = tw(MoonIcon)`
  w-[20px] group-hover:rotate-12 transition-all duration-1000
`

const ModeButton = tw(IconButton)`
  group
`

const Mode = styled(ModeButton).attrs<{ mode?: string }>({
	size: '2',
	variant: 'ghost',
})``

const Item = tw.div`
  h-[40px] items-center justify-center flex
`

const Wrap = tw.div`
  flex items-center justify-center md:w-[300px]
`

export { Dark, Item, Light, Mode, Wrap }
