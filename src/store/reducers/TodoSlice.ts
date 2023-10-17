// store/reducers/TodoSlice.js

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITask } from '../../models/ITask.model'

const initialState = {
	todo: [
		{ id: '1', title: 'Complete project proposal', state: 'TASK_INBOX' },
		{ id: '2', title: 'Buy groceries', state: 'TASK_INBOX' },
		{ id: '3', title: 'Prepare for the meeting', state: 'TASK_PINNED' },
		{ id: '4', title: 'Call John', state: 'TASK_INBOX' },
		{ id: '5', title: 'Finish coding assignment', state: 'TASK_INBOX' },
		{ id: '6', title: 'Read a book', state: 'TASK_ARCHIVED' },
		{ id: '7', title: 'Go for a run', state: 'TASK_INBOX' },
		{ id: '8', title: 'Write thank you cards', state: 'TASK_PINNED' },
		{ id: '9', title: 'Plan a vacation', state: 'TASK_INBOX' },
		{ id: '10', title: 'Buy birthday gift', state: 'TASK_INBOX' },
	],
}

const todoSlice = createSlice({
	name: 'taskbox',
	initialState,
	reducers: {
		createTask: (state, action: PayloadAction<ITask>) => {
			state.todo.push(action.payload)
		},

		updateTaskName: (
			state,
			action: PayloadAction<{ id: string; newTaskTitle: string }>
		) => {
			const { id, newTaskTitle } = action.payload

			const taskIndex = state.todo.findIndex(task => task.id === id)

			state.todo[taskIndex].title = newTaskTitle
			console.log(state.todo[taskIndex])
		},

		updateTaskState: (
			state,
			action: PayloadAction<{ id: string; newTaskState: string }>
		) => {
			const { id, newTaskState } = action.payload
			const taskIndex = state.todo.findIndex(task => task.id === id)

			state.todo[taskIndex].state = newTaskState
		},

		deleteTask: (state, action: PayloadAction<string>) => {
			const taskId = action.payload
			state.todo = state.todo.filter(task => task.id !== taskId)
		},
	},
})

export const { createTask, updateTaskState, deleteTask, updateTaskName } =
	todoSlice.actions
export default todoSlice.reducer
