import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as utilActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Cell, Textfield } from 'react-mdc-web'

class Unixtime extends Component {
  constructor(props) {
    super(props)
    this.state = { 'input': '' }
  }
  render() {
    return (
      <div>
        <Cell col={8}>
          <Textfield
            floatingLabel="TIme string"
            value={this.state.input}
            onChange={({ target: { value: input } }) => {
              this.props.actions.updateUnixtime(input)
              this.setState({ input })
            }}
          />
        </Cell>

      </div>
    )
  }
}

Unixtime.propTypes = {
  utils: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  utils: state.utils
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(utilActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Unixtime)
