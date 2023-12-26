import { Box, Card, IconButton } from '@radix-ui/themes'
import { Content, FileName, FileNameWrap, FileType } from '../styled'
import { Cross2Icon } from '@radix-ui/react-icons'
import { extractFileType } from '@utils/helpers'

type FileItemProps = {
	index: number
	name: string
	size: number
	type: string
	onPress: (index: number) => void
}
const FileItem = ({ index, name, size, type, onPress }: FileItemProps) => (
	<Card
		className='flex mb-[4px]'
		variant='classic'>
		<Box>
			<FileNameWrap>
				<FileName>{name}</FileName>
				<IconButton
					variant='ghost'
					size={'1'}
					onClick={() => onPress(index)}>
					<Cross2Icon className='text-orange-400 mr-[3px]' />
				</IconButton>
			</FileNameWrap>
			<Content>
				{Math.round(size / 1000)}kb <FileType>{extractFileType(type)}</FileType>
			</Content>
		</Box>
	</Card>
)

export default FileItem
