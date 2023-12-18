import tw from 'tailwind-styled-components'

const HStack = tw.div`
  flex items-center justify-between
`
const VStack = tw.div`
  flex flex-col mt-[25px]
`

export { HStack, VStack }
