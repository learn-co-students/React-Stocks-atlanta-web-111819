import React, { Component } from 'react';
import Stock from '../components/Stock'


const PortfolioContainer = props => {

  return (
    <div>
      <h2>My Portfolio</h2>
        {
          props.portfolio.map((s, i) => <Stock stock={s} key={i} handleStockClicked={props.handleStockClicked} origin='portfolio'/>)
        }
    </div>
  );
}

export default PortfolioContainer;
