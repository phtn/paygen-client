import { AvatarIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'

export const User = ({ onClick }: { onClick: () => void }) => (
	<div className='absolute top-[calc(100vh-97vh)] left-[calc(100vw-50px)]'>
		<IconButton
			variant='ghost'
			onClick={onClick}
			size='4'>
			<AvatarIcon className='h-[20px] w-[20px]' />
		</IconButton>
	</div>
)
