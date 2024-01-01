import tw from 'tailwind-styled-components'

const Display = tw.div`
  border-l-[0.33px] dark:border-slate-600 border-indigo-300
  overflow-hidden col-span-3 pl-7
`
const LogoWrap = tw.div`
  h-full
  group hover:scale-90 transition-all duration-1000 
  flex flex-col items-center justify-center
`

const Backdrop = tw.div`
  md:bg-[url('./logo-v1.svg')] md:bg-center bg-no-repeat
  h-[200px] w-[200px] flex flex-col
`

const Title = tw.h1`
  text-[2.5rem] text-transparent font-bold leading-[2.75rem] 
  group-hover:scale-110 transition-all duration-1000
  bg-clip-text bg-gradient-to-t from-indigo-400 dark:from-30% from-60% via-orange-100 dark:via-70% via-95% to-orange-50 to-100%
`
const Subtext = tw.h2`
  text-[1rem] group-hover:scale-90 transition-all duration-1000
  delay-200 dark:text-indigo-300 text-indigo-600 font-light
`
const PayGenLogo = () => (
	<LogoWrap>
		<Backdrop />
		{/* <Title>PayGen</Title> */}
		{/* <Subtext>Reliable Payments</Subtext> */}
	</LogoWrap>
)
export { Display, PayGenLogo }
