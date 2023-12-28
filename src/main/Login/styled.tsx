import { Tabs } from '@radix-ui/themes'
import tw from 'tailwind-styled-components'

const Container = tw.div`
  px-3 py-6 bg-black w-full md:w-fit h-fit rounded-xl shadow-md shadow-indigo-300/30
`

const SignInContent = tw(Tabs.Content)`
  flex flex-col h-full items-stretch p-2
`
export { Container, SignInContent }
