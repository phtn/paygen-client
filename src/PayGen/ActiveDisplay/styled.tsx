import tw from 'tailwind-styled-components'

const Display = tw.div`
  border-[0px] border-slate-600 rounded-lg 
  overflow-hidden
`
const Backdrop = tw.div`
  bg-[url('./meteor.svg')] bg-cover h-full
  hover:bg-bottom transition-all duration-1000 
  flex flex-col items-center justify-center
`
const Title = tw.h1`
  text-[2.5rem] text-transparent font-bold
  bg-clip-text bg-gradient-to-tr from-teal-500 to-orange-300
`
const Subtext = tw.h2`
  text-[1rem]
`
const PayGenLogo = () => (
	<Backdrop>
		<Title>PayGen</Title>
		<Subtext>Reliable Payments</Subtext>
	</Backdrop>
)
export { Display, PayGenLogo }
