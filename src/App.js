import React, { Component } from 'react';
import fetchCall from './fetchExternal';

const api_address = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
const wrong_api = 'http://some.none.sense';

class App extends Component {

  constructor() {
    super();
    this.state= {
      dataset1: [],
      dataset2: [],
      dataset3: '',
      dataset4: '',
    }
    this.callAPIinternal = this.callAPIinternal.bind(this);
  }

  callAPIinternal = async (api) => {
    try {
      const response = await fetch(api);
      if (!response.ok) throw Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.toString(); // just for testing
    }
  }

  async componentDidMount() {
    const dataset1 = await this.callAPIinternal(api_address);
    const dataset2 = await fetchCall(api_address);
    const dataset3 = await this.callAPIinternal(wrong_api);
    const dataset4 = await fetchCall(wrong_api);
    this.setState({
      dataset1,
      dataset2,
      dataset3,
      dataset4,
    })
  }

  render() {

    const { dataset1, dataset2, dataset3, dataset4 } = this.state;

    return (
      <div className='container'>
        <div className='data'>
          <h4>Test 1</h4>
          <ul>{dataset1.map((el, key) => {
            return(<li key={key}>
            {el.name}: {el.price_usd}
            </li>)
          })}</ul>
        </div>
        <div className='data'>
          <h4>Test 2</h4>
          <ul>{dataset2.map((el, key) => {
            return(<li key={key}>
            {el.name}: {el.price_usd}
            </li>)
          })}</ul>
        </div>
        <div className='data'>
          <h4>Test 3</h4>
          <p>{ dataset3 }</p>
        </div>
        <div className='data'>
          <h4>Test 4</h4>
          <p>{ dataset4 }</p>
        </div>
      </div>
    );
  }
}

export default App;
