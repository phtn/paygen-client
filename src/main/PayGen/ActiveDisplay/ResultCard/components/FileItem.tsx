import { Box, Flex } from '@radix-ui/themes'
import { Cross2Icon } from '@radix-ui/react-icons'
import { extractFileType } from '@utils/helpers'
import { Card } from '@components/card'
import tw from 'tailwind-styled-components'
import { Variant } from '@components/variant'

type FileItemProps = {
	index: number
	name: string
	size: number
	type: string
	onPress: (index: number) => void
}
const FileItem = ({ index, name, size, type, onPress }: FileItemProps) => (
	<Container>
		<Column>
			<FileNameWrap>
				<FileName>{name}</FileName>
				<Variant
					variant='casper'
					size='xs'
					onClick={() => onPress(index)}>
					<Cross2Icon />
				</Variant>
			</FileNameWrap>
			<DetailsWrap>
				<FileSize>{Math.round(size / 1000)}KB</FileSize>
				<FileType>{extractFileType(type)}</FileType>
			</DetailsWrap>
		</Column>
	</Container>
)

const Container = tw(Card)`
	flex mb-[4px] flex-auto rounded-sm cursor-pointer p-2 border-0 bg-indigo-200 dark:bg-indigo-400
`
const Column = tw(Box)`
	overflow-x-auto flex-1
`
const DetailsWrap = tw(Flex)`
  text-slate-800 text-[8px] md:text-[13px] items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis
`
const FileNameWrap = tw.div`
  flex items-center justify-between 
`
const FileName = tw.div`
text-indigo-950 text-[12px] font-medium tracking-tight
  flex flex-wrap overflow-x-scroll pb-1
`
const FileSize = tw.div`
  dark:text-indigo-50 text-indigo-600 text-[10px]
`
const FileType = tw.div`
  uppercase dark:text-indigo-50 text-indigo-600 tracking-tighter text-[10px] font-extrabold ml-3
`

export default FileItem
