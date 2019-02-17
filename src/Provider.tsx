import React  from 'react'
import PropTypes from 'prop-types'
import { SectionProps } from './Section'
import Context from './Context'
export interface ProviderProps {
  layouts: any,
    children: React.ReactNode,
}

class Provider extends React.PureComponent<ProviderProps, {}> {
  static propTypes = {
    layouts: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.element.isRequired
  }

  state = {
    layouts: this.props.layouts,
    layout: '',
    sections: null
  }

  setData = ({ layout, sections }) => {
    if (!this.state.sections) {
      this.setState({ layout, sections })
    }
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        setData: this.setData
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider