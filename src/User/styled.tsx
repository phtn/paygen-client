import { Tabs } from '@radix-ui/themes'
import tw from 'tailwind-styled-components'

const Container = tw.div`
  p-3
`

const SignInContent = tw(Tabs.Content)`
  flex flex-col h-full items-stretch p-2
`
export { Container, SignInContent }
