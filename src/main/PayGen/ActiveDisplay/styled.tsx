import tw from 'tailwind-styled-components'

const Display = tw.div`
  border-l-[0.33px] border-slate-600
  overflow-hidden col-span-3 pl-7
`
const Backdrop = tw.div`
  md:bg-[url('./logo-v1.svg')] md:bg-center bg-no-repeat h-full
  group hover:scale-90 transition-all duration-1000 
  flex flex-col items-center justify-center
`
const Title = tw.h1`
  text-[2.5rem] text-transparent font-bold leading-[2.5rem] 
  group-hover:scale-110 transition-all duration-1000
  bg-clip-text bg-gradient-to-t from-indigo-400 dark:from-30% from-60% via-orange-100 dark:via-70% via-95% to-orange-50 to-100%
`
const Subtext = tw.h2`
  text-[1.2rem] group-hover:scale-90 transition-all duration-1000
  delay-200 dark:text-indigo-300 text-indigo-600 font-thin
`
const PayGenLogo = () => (
	<Backdrop>
		<Title>PayGen</Title>
		<Subtext>Reliable Payments</Subtext>
	</Backdrop>
)
export { Display, PayGenLogo }
