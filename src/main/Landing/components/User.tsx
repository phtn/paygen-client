import { Variant } from '@components/variant'
import { AvatarIcon } from '@radix-ui/react-icons'

export const User = ({ onClick }: { onClick: () => void }) => (
	<div className='absolute top-[calc(100vh-98vh)] w-screen flex justify-end'>
		<Variant
			className='mx-6'
			onClick={onClick}
			size='icon'
			variant='ghost'>
			<AvatarIcon className='h-[20px] w-[20px]' />
		</Variant>
	</div>
)
