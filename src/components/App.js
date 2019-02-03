import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Favorites from './Favorites'
import NotFound from './404'
import Modal from './Modal'
import BeerDetailsModal from './Modal/BeerDetailsModal'

class App extends Component {
  render() {
    const { modal } = this.props;
    return (
        <>
            { modal.showModal &&
                <Modal>
                    <BeerDetailsModal/>
                </Modal>
            }
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </>
    );
  }
}

const mapStateToProps = ({ modal }) => ({ modal });

export default withRouter(connect(mapStateToProps, null)(App));
