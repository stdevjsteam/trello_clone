import React, { Component } from 'react';
import Header from './Components/Header';
import BoardInfo from './Components/BoardInfo';
import Main from './Components/Main';
import { connect } from 'react-redux';
import { getData } from './store/actions/data';


class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (     
        <div>
          <Header />
          <BoardInfo />
          <Main />
        </div>
    );
  }
}

const mapDispatchToProps = {
  getData
};

export default connect(
  null,
  mapDispatchToProps
)(App);