import { ReduxDecorator } from '../../providers/storybook/ReduxDecorator'
import Task from './Task'

export default {
	component: Task,
	title: 'Task',
	decorators: [ReduxDecorator],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export const TaskComponent = {
	args: {
		task: {
			id: '2',
			title: 'spdojf',
			state: 'TASK_ARCHIVED',
		},
	},
}
