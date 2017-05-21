import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, Content, DrawerHeader, DrawerContent, DrawerHeaderContent, Drawer, Navigation } from 'react-mdc-web'
import * as utilActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Unixtime from './Unixtime'

class HomeComponent extends Component {
  componentDidMount () {
    this.props.actions.toggleMenu()
  }
  render () {
    return (
      <div>
        <h2>!!!</h2>
      </div>)
  }
}

HomeComponent.propTypes = {
  utils: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

class App extends Component {
  render () {
    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarTitle onClick={() => (this.props.actions.toggleMenu())} >Utility</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Content>
          <Router>
            <div>
              <Drawer
                open={this.props.utils.showMenu}
                onClose={() => { this.props.actions.toggleMenu() }} >
                <DrawerHeader>
                  <DrawerHeaderContent>
                    Utilities
                </DrawerHeaderContent>
                </DrawerHeader>
                <DrawerContent>
                  <Navigation>
                    <Link onClick={() => { this.props.actions.toggleMenu() }} to="/unixtime">Unix Time Stamp</Link>
                  </Navigation>
                </DrawerContent>
              </Drawer>
              <Route exact path="/" component={Home} />
              <Route path="/unixtime" component={Unixtime} />
            </div>
          </Router>
        </Content>
      </div >
    )
  }
}

App.propTypes = {
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

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
