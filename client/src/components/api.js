import React from 'react';
import axios from 'axios';

/// this component is forthe third party api
class Change extends React.Component {
  state = {
    USDYER: '',
    USDYEN: '',
    USDRYB: '',
    USDGBP: '',
    USDILS: '',
  };

  componentDidMount() {
    axios
      .get('/getAllCur')
      .then((result) => {
        this.setState({
          USDYER: result.data.USDYER,
          USDYEN: result.data.USDJPY,
          USDRYB: result.data.USDRUB,
          USDGBP: result.data.USDGBP,
          USDILS: result.data.USDILS,
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <div className='container'>
        <form>
          <h3 className='currency'>Currency Prices</h3>
          <p className='api'>USD To YER : {this.state.USDYER}</p>
          <br />
          <p className='api'>USD To YEN : {this.state.USDYEN}</p>
          <br />
          <p className='api'>USD To RYB : {this.state.USDRYB}</p>
          <br />
          <p className='api'>USD To GBP : {this.state.USDGBP}</p>
          <br />
          <p className='api'>USD To ILS : {this.state.USDILS}</p>
        </form>
      </div>
    );
  }
}

export default Change;
