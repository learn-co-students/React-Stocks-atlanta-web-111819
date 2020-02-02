import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.porStocks.map(stock =>  <div onClick={(e) => this.props.handleSave(stock)}>
            <Stock stock={stock}/>
          </div>)
      }
          
      </div>
    );
  }

}

export default PortfolioContainer;
