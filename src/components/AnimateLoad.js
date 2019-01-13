import React from 'react'

const AnimateLoad = (WrappedComponent, options) => {
  return class extends React.Component {
    state = { didMount: false }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ didMount: true })
      }, 0)
    }

    render() {
      const { didMount } = this.state

      let { duration, delay, animation } = options || {};
      duration = duration || '.7s';
      delay = delay || '0s';
      animation = animation || 'fadeIn';

      let styles;
      if (didMount) {
        styles = {
          animation: `${animation} ${duration} ease-out ${delay} 1`
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