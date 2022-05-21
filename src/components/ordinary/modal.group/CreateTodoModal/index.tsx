import { FC, FormEvent, useState } from 'react'
import ModalMain from '../ModalMain'
import ModalHeader from '../ModalHeader'
import ModalFooter from '../ModalFooter'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { randomId } from 'core/utils'
import { useTodoApi } from 'core/hooks'

const CreteTodoModal: FC<IProps> = () => {
	const [title, setTitle] = useState<string>('')

	const todoApi = useTodoApi()

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!title.trim()) return
		const data = {
			title,
			completed: false,
			id: randomId(),
		}
		todoApi?.setTodos([...todoApi.todos, data])
		todoApi?.setModal(null)
	}

	return (
		<form onSubmit={onSubmit} className='w-full'>
			<ModalHeader title='Create Modal' />
			<ModalMain>
				<Input setValue={setTitle} value={title} type='text' name='title'>
					Title
				</Input>
			</ModalMain>
			<ModalFooter>
				<Button disabled={!title.trim()} className='w-full'>
					Create
				</Button>
			</ModalFooter>
		</form>
	)
}

interface IProps {}
export default CreteTodoModal
