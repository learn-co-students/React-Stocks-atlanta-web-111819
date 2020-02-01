import React, { Component } from 'react';
import Stock from '../components/Stock'

function StockContainer(props) {

  return (
    <div>
      <h2>Stocks</h2>
      {
        props.stocks.map(s => (
          <Stock 
            stock={s}
            origin='stocks'
            onStockClick={props.onStockClick}
          />
        ))
      }
    </div>
  );
}

export default StockContainer;
