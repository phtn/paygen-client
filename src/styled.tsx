import tw from 'tailwind-styled-components'

const HStack = tw.div`
  flex items-center justify-between
`
const VStack = tw.div`
  flex flex-col w-full
`

export { HStack, VStack }
