import { ChangeEvent, useCallback } from 'react'
import FileItem from './FileItem'
import { EmailWrap, MessageArea, Uploads } from '../styled'
import FlatList from '@components/flatlist'

type EmailContentProps = {
	data: File[] | null
	fileRemove: (index: number) => void
	messageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

type RenderProps = {
	item: File
	index?: number
}

export const EmailContent = ({
	data,
	fileRemove,
	messageChange,
}: EmailContentProps) => {
	const renderItem = useCallback(
		(props: RenderProps) => {
			const { name, size, type } = props.item
			return (
				<FileItem
					index={props.index as number}
					name={name}
					size={size}
					type={type}
					onPress={fileRemove}
				/>
			)
		},
		[data]
	)
	return (
		<EmailWrap>
			<MessageArea onChange={messageChange} />
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
