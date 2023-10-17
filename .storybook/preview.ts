import type { Preview } from '@storybook/react'
import { ReduxDecorator } from '../src/providers/storybook/ReduxProvider'

const preview: Preview = {
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

export default preview
