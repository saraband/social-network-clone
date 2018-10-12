import React, { PureComponent } from 'react'
import PlainLoader from 'COMPONENTS/Loaders/PlainLoader';

export default ({
	Loader = PlainLoader,
	loaderProps = {},
	where = 'before'
}) => Component => {
	return class extends PureComponent {
		render() {
			const {
				isLoading,
				...rest
			} = this.props

			if (!isLoading)
				return <Component {...rest} />

			switch (where) {
				case 'before':
					return (
						<React.Fragment>
							<Loader {...loaderProps} />
							<Component {...rest} />
						</React.Fragment>
					)

				case 'after':
					return (
						<React.Fragment>
							<Component {...rest} />
							<Loader {...loaderProps} />
						</React.Fragment>
					)

				case 'inside':
					return(
						<Component {...rest}>
							<Loader {...loaderProps} />
						</Component>
					)

				default:
					console.error(`'${where}' is not a possible option for property 'where' in withLoader HOC`)
					return <Component {...rest} />
			}
		}
	}
}
