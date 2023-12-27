import tw from 'tailwind-styled-components'

const Display = tw.div`
  border-[0px] border-slate-600 rounded-lg 
  overflow-hidden col-span-3
`
const Backdrop = tw.div`
  bg-[url('./logo-v1.svg')] bg-center bg-no-repeat h-full
  group hover:scale-90 transition-all duration-1000 
  flex flex-col items-center justify-center
`
const Title = tw.h1`
  text-[2.5rem] text-transparent font-bold 
  group-hover:scale-110 transition-all duration-1000
  bg-clip-text bg-gradient-to-tr from-teal-500 to-orange-300
`
const Subtext = tw.h2`
  text-[1rem] group-hover:scale-90 transition-all duration-1000
  delay-200
`
const PayGenLogo = () => (
	<Backdrop>
		<Title>PayGen</Title>
		<Subtext>Reliable Payments</Subtext>
	</Backdrop>
)
export { Display, PayGenLogo }
