// components/Task.tsx

import { Checkbox } from '@mui/material'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITask } from '../../models/ITask.model'
import {
	deleteTask,
	updateTaskName,
	updateTaskState,
} from '../../store/reducers/TodoSlice'
import styles from './styles.module.sass'

interface TaskProps {
	task: ITask
}

const Task: FC<TaskProps> = ({ task }) => {
	const dispatch = useDispatch()

	const [name, setName] = useState(task.title)

	const handleUpdateTaskState = (
		taskId: string,
		newTaskState: 'TASK_ARCHIVED' | 'TASK_PINNED' | 'TASK_INBOX' | string
	) => {
		if (newTaskState == 'TASK_ARCHIVED') {
			dispatch(updateTaskState({ id: taskId, newTaskState }))
			return
		}

		newTaskState = newTaskState === 'TASK_PINNED' ? 'TASK_INBOX' : 'TASK_PINNED'
		console.log(2)

		dispatch(updateTaskState({ id: taskId, newTaskState }))
	}

	const handleUpdateTaskName = (taskId: string, taskName: string) => {
		dispatch(updateTaskName({ id: taskId, newTaskTitle: taskName }))
	}

	const handleDeleteTask = (taskId: string) => {
		dispatch(deleteTask(taskId))
	}

	return (
		<div className={styles.taskContainer}>
			<div className={styles.taskContainer__title}>
				<Checkbox
					name={`checked-${task.id}`}
					id={`archiveTask-${task.id}`}
					checked={task.state === 'TASK_ARCHIVED'}
					onClick={() => handleUpdateTaskState(task.id, 'TASK_ARCHIVED')}
				/>

				<input
					type='text'
					placeholder='Title'
					defaultValue={task.title}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className={styles.buttons__container}>
				{task.state !== 'TASK_ARCHIVED' && (
					<button onClick={() => handleUpdateTaskState(task.id, task.state)}>
						{task.state === 'TASK_PINNED' ? (
							<span>UnPin</span>
						) : (
							<span>Pin</span>
						)}
					</button>
				)}

				<button onClick={() => handleUpdateTaskName(task.id, name)}>
					Изменить
				</button>

				<button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
			</div>
		</div>
	)
}

export default Task
