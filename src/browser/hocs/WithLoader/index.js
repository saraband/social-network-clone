/*
**  Loader HOC
**  Allows a component to have a loader
**  showing whenever its prop `isLoading` is set
**  The loader can be displayed before, after or inside the component
**
**  Ex: withLoader({
**    loader: LoaderComponent,
**    loaderProps: { color: blue },
**    where: 'after'
**  })(Component)
*/

import React, { PureComponent } from 'react'
import PlainLoader from 'COMPONENTS/Loaders/PlainLoader';

export default ({
  Loader = PlainLoader,
  loaderProps = {},
  where = 'before'
}) => Component => {

  let ComponentWithLoader;
  switch (where) {
    case 'before':
      ComponentWithLoader = (props) => (
        <React.Fragment>
          <Loader {...loaderProps} />
          <Component {...props} />
        </React.Fragment>
      )
      break;

    case 'after':
      ComponentWithLoader = (props) => (
        <React.Fragment>
          <Component {...props} />
          <Loader {...loaderProps} />
        </React.Fragment>
      )
      break;

    case 'inside':
      ComponentWithLoader = (props) => (
        <Component {...props}>
          <Loader {...loaderProps} />
        </Component>
      )
      break;

    default:
      console.error(`'${where}' is not a possible option for property 'where' in withLoader HOC`)
      ComponentWithLoader = (props) => <Component {...props} />
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

      return <ComponentWithLoader {...rest} />;
    }
  }
}
