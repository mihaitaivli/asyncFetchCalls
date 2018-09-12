import React, { Component } from 'react';
import fetchCall from './fetchExternal';

const api_address = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

class App extends Component {

  constructor() {
    super();
    this.state= {
      data1: [],
      data2: [],
    }
    this.callAPIinternal = this.callAPIinternal.bind(this);
  }

  callAPIinternal = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const dataset1 = await this.callAPIinternal(api_address);
    const dataset2 = await fetchCall(api_address);
    this.setState({
      data1: dataset1,
      data2: dataset2,
    })
  }

  render() {
    const { data1, data2 } = this.state;
    return (
      <div className='container'>
        <div className='d1'>
          <h4>Test 1</h4>
          <ul>{data1.map((el, key) => {
            return(<li key={key}>
            {el.name}: {el.price_usd}
            </li>)
          })}</ul>
        </div>
        <div className='d2'>
          <h4>Test 2</h4>
          <ul>{data2.map((el, key) => {
            return(<li key={key}>
            {el.name}: {el.price_usd}
            </li>)
          })}</ul>
        </div>
      </div>
    );
  }
}

export default App;
