import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { createTask } from '../../store/reducers/TodoSlice'
import styles from './styles.module.sass'

const AddNewTask = () => {
	const dispatch = useAppDispatch()
	const [newTaskTitle, setNewTaskTitle] = useState('')

	const handleAddTask = () => {
		if (newTaskTitle) {
			dispatch(
				createTask({
					id: Date.now().toString(),
					title: newTaskTitle,
					state: 'TASK_INBOX',
				})
			)
			setNewTaskTitle('')
		}
	}

	return (
		<div className={styles.addNewTask__container}>
			<input
				type='text'
				placeholder='Enter a new task'
				value={newTaskTitle}
				onChange={e => setNewTaskTitle(e.target.value)}
			/>
			<button onClick={handleAddTask}>Add Task</button>
		</div>
	)
}

export default AddNewTask
