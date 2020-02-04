import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.renderedStocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.renderedStocks.map(stock => <Stock stock={stock} key={stock.id} onAddStock={this.props.onAddStock}/>
          )
        }
      </div>
    );
  }

}

export default StockContainer;
