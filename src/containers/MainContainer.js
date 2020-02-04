import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
constructor() {
  super()

  this.state = {
    stocks : [],
    renderedStocks : [],
    portfolio : [], 
    sortA : null,
    sortP : null 
  }
}

componentDidMount() {
  fetch('http://localhost:3000/stocks')
  .then((res) => res.json())
  .then(stocks => {
    this.setState({
      stocks : stocks,
      renderedStocks : stocks
    })
    // console.log(this.state)
  })
}

handleAddStock = (stock) => {
  // console.log(stock)
  this.setState({
    portfolio : [...this.state.portfolio, stock]
  })
}

handleDeleteStock = (stock) => {
  console.log(stock)
  //Filter the stock from the portfolio
  this.setState({
    portfolio : this.state.portfolio.filter(st => st !== stock)
  })
  console.log(this.state.portfolio)
} 

handleFilterStocks = (event) => {
  console.log("working")
  if(event.target.value !== "All Stocks") {
    this.setState({
      renderedStocks: this.state.stocks.filter(st => st.type === event.target.value )

    })
  } else {
    this.setState({

      renderedStocks: this.state.stocks

    })
  }
  console.log(this.state.renderedStocks)

}

handleSortStocks = (event) => {
  console.log('Working')

  if(event.target.value === "Alphabetically") {
    this.setState({
      renderedStocks : this.state.renderedStocks.sort((a, b) => a.name.localeCompare(b.name)),
      sortA : true,
      sortP : false
    })
  } else if (event.target.value === "Price") {
    this.setState({
      renderedStocks : this.state.renderedStocks.sort((a, b) => a.price > b.price ? 1 : -1),
      sortA : false,
      sortP : true
    })
  }
}
 

  render() {
    return (
      <div>
        <SearchBar onFilteredStocks={this.handleFilterStocks} onSortedStocks={this.handleSortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer renderedStocks={this.state.renderedStocks} onAddStock={this.handleAddStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.portfolio} onDeleteStock={this.handleDeleteStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
