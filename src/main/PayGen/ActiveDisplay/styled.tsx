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

const PayGenLogo = () => (
	<LogoWrap>
		<Backdrop />
	</LogoWrap>
)
export { Display, PayGenLogo }
