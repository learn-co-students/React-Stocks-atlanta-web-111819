import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={() => props.handleStockClicked(props.stock, props.origin)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            `${props.stock.ticker}: ${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
