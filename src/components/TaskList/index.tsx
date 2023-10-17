import { FC, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { filter } from '../../utils/constants'
import AddNewTask from '../AddNewTask'
import Task from '../Task/Task'
import styles from './styles.module.sass'

const TaskList: FC = () => {
	const { todo } = useAppSelector(state => state.todoReducer)

	const [sort, setSort] = useState('All')

	const sortedTasks =
		sort === 'All' ? todo : todo.filter(task => task.state === sort)

	return (
		<div className={styles.taskList__container}>
			<AddNewTask></AddNewTask>
			<div className={styles.categories__container}>
				{filter.map(filterItem => (
					<button
						key={filterItem.id}
						onClick={() => setSort(filterItem.filter)}
						className={filterItem.filter === sort ? styles.active : ''}
					>
						{filterItem.name}
					</button>
				))}
			</div>
			<div className={styles.tasks__container}>
				{sortedTasks.map(task => (
					<Task key={task.id} task={task} />
				))}
			</div>
		</div>
	)
}

export default TaskList
