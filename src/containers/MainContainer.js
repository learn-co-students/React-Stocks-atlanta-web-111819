import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: 'none',
    sort: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks').then(res => res.json()).then(stocks => this.setState({stocks: stocks}))
  }

  handleStockClicked = (stock, origin) => {
    if (origin === 'stocks') {
      if (!this.state.portfolio.includes(stock)) {
        this.setState({portfolio: [...this.state.portfolio, stock]})
      }
    } else {
      const newStocks = this.state.portfolio.filter(s => stock.id !== s.id)
      this.setState({portfolio: newStocks})
    }
  }

  handleSearchCriteriaChanged = (type, value) => {
    // console.log('changing', type, 'to', value)
    this.setState({[type]: value})
  }

  filterStocks = () => {
    const filter = this.state.filter
    if (filter !== 'none')
      return this.state.stocks.filter(s => s.type === filter)
    else
      return [...this.state.stocks]
  }

  sortStocks = () => {
    const sortedStocks = this.filterStocks()
    if (this.state.sort === 'Alphabetically')
      return sortedStocks.sort((s1, s2) => s1.ticker.localeCompare(s2.ticker))
    else if (this.state.sort === 'Price')
      return sortedStocks.sort((s1, s2) => s2.price - s1.price)
    else
      return sortedStocks
  }

  render() {
    return (
      <div>
        <SearchBar 
          handleSearchCriteriaChanged={this.handleSearchCriteriaChanged} 
          filterType={this.state.filter}
          sortType={this.state.sort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortStocks()} handleStockClicked={this.handleStockClicked} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleStockClicked={this.handleStockClicked}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
