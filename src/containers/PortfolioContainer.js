import React, { Component } from 'react';
import Stock from '../components/Stock'

function PortfolioContainer(props) {
  return (
    <div>
      <h2>My Portfolio</h2>
        {
          props.portfolio.map(s => (
            <Stock 
              stock={s}
              origin='portfolio'
              onStockClick={props.onStockClick}
            />
          ))
        }
    </div>
  );
}

export default PortfolioContainer;
