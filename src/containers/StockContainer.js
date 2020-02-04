import React, { Component } from 'react';
import Stock from '../components/Stock'

const StockContainer = props => {

  return (
    <div>
      <h2>Stocks</h2>
      {
        props.stocks.map((s, i) => <Stock key={i} stock={s} handleStockClicked={props.handleStockClicked} origin="stocks" />)
      }
    </div>
  );
}



export default StockContainer;
