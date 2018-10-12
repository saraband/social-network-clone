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
			renderComponentWithLoader = (props) => (
				<React.Fragment>
					<Loader {...loaderProps} />
					<Component {...props} />
				</React.Fragment>
			)
			break;

		case 'after':
			renderComponentWithLoader = (props) => (
				<React.Fragment>
					<Component {...props} />
					<Loader {...loaderProps} />
				</React.Fragment>
			)
			break;

		case 'inside':
			renderComponentWithLoader = (props) => (
				<Component {...props}>
					<Loader {...loaderProps} />
				</Component>
			)
			break;

		default:
			console.error(`'${where}' is not a possible option for property 'where' in withLoader HOC`)
			renderComponentWithLoader = (props) => <Component {...props} />
			break;
	}

	return class extends PureComponent {
		render() {
			const {
				isLoading,
				...rest
			} = this.props

			if (!isLoading)
				return <Component {...rest} />

			return renderComponentWithLoader(rest);
		}
	}
}
