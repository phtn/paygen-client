import { Flex } from '@radix-ui/themes'
import { TitleItem } from '../hooks'
import { TitleValue } from './styled'

type PropItem = {
	label: string
	value: string
}
type TitleProps = {
	titleProps: TitleItem[] | null | undefined
}

const Column = ({ item }: { item: PropItem }) => (
	<div className='flex flex-col'>
		<TitleValue>{item.value}</TitleValue>
		<p className='text-[11px] text-slate-400 mx-1'>{item.label}</p>
	</div>
)
export const Title = ({ titleProps }: TitleProps) => {
	return (
		<Flex className='w-full items-center mb-8 h-[100px] border-b-[0.33px] border-indigo-300 dark:border-slate-600'>
			{titleProps && titleProps.map((item) => <Column item={item} />)}
		</Flex>
	)
}
