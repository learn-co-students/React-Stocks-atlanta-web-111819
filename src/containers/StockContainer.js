import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.stocks.map(stock =>  <div  onClick={(e) => this.props.handleSave(stock)}>
            {console.log(stock)
            }
              <Stock stock={stock}/>
            </div>)
        }
      </div>
    );
  }

}

export default StockContainer;
