export interface ITask {
	id: string
	title: string
	state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED' | string
}
