import React, { PureComponent } from 'react'
import PlainLoader from 'COMPONENTS/Loaders/PlainLoader';

export default ({
	Loader = PlainLoader,
	loaderProps = {},
	where = 'before'
}) => Component => {
	let renderComponentWithLoader;

	switch (where) {
		case 'before':
			renderComponentWithLoader = () => (
				<React.Fragment>
					<Loader {...loaderProps} />
					<Component {...rest} />
				</React.Fragment>
			)

		case 'after':
			renderComponentWithLoader = () => (
				<React.Fragment>
					<Component {...rest} />
					<Loader {...loaderProps} />
				</React.Fragment>
			)

		case 'inside':
			renderComponentWithLoader = () => (
				<Component {...rest}>
					<Loader {...loaderProps} />
				</Component>
			)

		default:
			console.error(`'${where}' is not a possible option for property 'where' in withLoader HOC`)
			renderComponentWithLoader = () => <Component {...rest} />
	}

	return class extends PureComponent {
		render() {
			const {
				isLoading,
				...rest
			} = this.props

			if (!isLoading)
				return <Component {...rest} />

			renderComponentWithLoader();
		}
	}
}
