import { Box, Tabs } from '@radix-ui/themes'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Tab = tw(Tabs.Root)`
  border-b-[0.2px] border-slate-600/80 
  w-screen p-0 m-0
`
const Trigger = tw(Tabs.Trigger)`
  logo space-x-6 transition-all duration-400 dark:text-slate-500 dark:hover:text-orange-100  
`
const ContentWrap = tw(Box)`
  h-[calc(100vh-110px)]
  overflow-y-scroll
`
const Content = styled(ContentWrap).attrs({
	px: '4',
	pt: '0',
	pb: '0',
})``

const TabContent = tw(Tabs.Content)`
`
type TC = {
	value?: string
}
const Home = styled(TabContent).attrs<TC>({
	value: 'home',
})``

const Reports = styled(TabContent).attrs<TC>({
	value: 'reports',
})``

const Settings = styled(TabContent).attrs<TC>({
	value: 'settings',
})``

const ProfileWrap = styled(TabContent).attrs<TC>({
	value: 'profile',
})``

export { Content, Home, ProfileWrap, Reports, Settings, Tab, Trigger }
