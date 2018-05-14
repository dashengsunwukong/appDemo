import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGun, removeGun, addGunAsync} from './index.redux'

//"transform-decorators-legacy"插件
@connect(
  (state) => ({num: state}),
  { addGun, removeGun, addGunAsync})

class App extends Component {
  render() {
    const num = this.props.num;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <h1>现在有机枪{num}把。</h1>
        <button onClick={addGun}>添加一把枪</button>
        <button onClick={removeGun}>上交一把枪</button>
        <button onClick={addGunAsync}>拖两天再给</button>
      </div>
    );
  }
}

export default App;
