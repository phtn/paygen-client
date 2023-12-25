import { useCallback } from 'react'
import FileItem from './FileItem'
import { EmailWrap, TextMessage, Uploads } from '../styled'
import FlatList from '@components/flatlist'

type EmailContentProps = {
	data: File[] | null
	onPress: (index: number) => void
}

type RenderProps = {
	item: File
	index?: number
}

const EmailContent = ({ data, onPress }: EmailContentProps) => {
	const renderItem = useCallback(
		(props: RenderProps) => {
			const { name, size, type } = props.item
			return (
				<FileItem
					index={props.index as number}
					name={name}
					size={size}
					type={type}
					onPress={onPress}
				/>
			)
		},
		[data]
	)
	return (
		<EmailWrap>
			<TextMessage placeholder='Write a custom message to include in the email. (Optional)' />
			<Uploads>
				<FlatList
					data={data}
					keyExtractor={(item, index) =>
						`${item.name || `${Date.now().toString(20)}`}_${index}`
					}
					renderItem={(item, index) => renderItem({ item, index })}
				/>
			</Uploads>
		</EmailWrap>
	)
}
export default EmailContent
