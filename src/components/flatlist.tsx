import {ReactElement} from 'react'
import { Box, Flex } from '@radix-ui/themes'
import { qe } from '@utils/helpers'

type RenderItemFunction<T> = (item: T, index?: number) => ReactElement
type KeyExtractorFunction<T> = (item: T, index: number) => string

interface FlatListProps<T> {
  bgcolor?: string
	data: T[] | null
	renderItem: RenderItemFunction<T>
	keyExtractor: KeyExtractorFunction<T>
	horizontal?: boolean
}

const Horizontal = <T,>({
	data,
	renderItem,
	keyExtractor,
}: FlatListProps<T>) => (
	<Flex>
		{data &&
			data.map((item, index) => (
				<div key={keyExtractor(item, index)}>{renderItem(item, index)}</div>
			))}
	</Flex>
)

const Vertical = <T,>({ data, renderItem, keyExtractor }: FlatListProps<T>) => (
	<Box>
		{data &&
			data.map((item, index) => (
				<div key={keyExtractor(item, index)}>{renderItem(item, index)}</div>
			))}
	</Box>
)


function FlatList<T>(props: FlatListProps<T>) {
	const View = () => {
		const options = qe(<Horizontal {...props} />, <Vertical {...props} />)
		return <Box className={props.bgcolor}>{options.get(props.horizontal ?? false)}</Box>
	}
	return <View />
}

export default FlatList
