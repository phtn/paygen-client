import { Loading } from '@components/loading'

export const ActiveSubmit = () => (
	<>
		<span>Generate Payment Link</span>
	</>
)

export const InactiveSubmit = () => (
	<>
		<span>Generating</span>
		<Loading />
	</>
)
