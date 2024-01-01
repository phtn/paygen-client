import FlatList from '@components/flatlist'
import { Uploads } from '../styled'
import { useCallback } from 'react'
import FileItem from './FileItem'
import { SectionLabel } from '@components/label'
import { FileTextIcon } from '@radix-ui/react-icons'
type RenderProps = {
	item: File
	index?: number
}

type AttachmentProps = {
	data: File[] | null
	fileRemove: (index: number) => void
}

export const Attachments = ({ data, fileRemove }: AttachmentProps) => {
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
		[fileRemove]
	)
	return (
		<Uploads>
			<SectionLabel
				label='Attachments'
				extra={`[${data?.length}]`}>
				<FileTextIcon />
			</SectionLabel>
			<FlatList
				data={data}
				keyExtractor={(item, index) =>
					`${item.name || `${Date.now().toString(20)}`}_${index}`
				}
				renderItem={(item, index) => renderItem({ item, index })}
			/>
		</Uploads>
	)
}
