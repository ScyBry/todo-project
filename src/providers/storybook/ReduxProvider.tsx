import { Decorator } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../../store/store'

export const ReduxDecorator: Decorator = Story => (
	<Provider store={store}>
		<Story></Story>
	</Provider>
)
