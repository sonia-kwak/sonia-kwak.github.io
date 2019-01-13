import React from 'react'

const AnimateLoad = (WrappedComponent, options) => {
  return class extends React.Component {
    state = { didMount: false }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ didMount: true })
      }, 0)
    }

    // Doesn't work :(
    // componentWillUnmount() {
    //   this.setState({ didMount: false })
    // }

    render() {
      const { didMount } = this.state

      let { duration, delay } = options || {};
      duration = duration || '.7s';
      delay = delay || '0s';

      let styles;
      if (didMount) {
        styles = {
          animation: `slideIn ${duration} ease-out ${delay} 1`
        }
      } else {
        styles = {
          opacity: 0,
        }
      }

      return (
        // <div className={`fade-in ${didMount && 'visible'}`}>
        <div style={styles}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
}

export default AnimateLoad