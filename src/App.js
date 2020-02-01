import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterType: 'none',
    sortType: 'none'
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json()).then(stocks => this.setState({stocks: stocks}))
  }

  onStockClick = (stock, origin) => {
    console.log(origin)
    if (origin === 'portfolio') {
      const newPortfolio = this.state.portfolio.filter(s => s.id !== stock.id)
      this.setState({portfolio: newPortfolio})
    } else {
      const newPortfolio = [...this.state.portfolio]
      newPortfolio.push(stock)
      this.setState({portfolio: newPortfolio})
    }
  }

  filterStocks = () => {
    if (this.state.filterType === 'none') {
      return this.state.stocks
    }
    return this.state.stocks.filter(s => s.type === this.state.filterType)
  }

  sortStocks = () => {
    const stocks = this.filterStocks()
    if (this.state.sortType === 'Alphabetically') {
      stocks.sort((s1, s2) => s1.ticker.localeCompare(s2.ticker))
    } else if (this.state.sortType === 'Price') {
      stocks.sort((s1, s2) => s2.price - s1.price)
    }
    return stocks
  }

  onFilterChanged = e => {
    console.log('filter type changed to', e.target.value)
    this.setState({filterType: e.target.value})
  }

  onSortChanged = e => {
    this.setState({sortType: e.target.value})
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stocks={this.sortStocks()} 
          portfolio={this.state.portfolio} 
          onStockClick={this.onStockClick}

          stockFilter={this.state.filterType}
          onFilterChanged={this.onFilterChanged}

          onSortChanged={this.onSortChanged}
          sortAlphabetically={this.state.sortType === 'Alphabetically'}
        />
      </div>
    );
  }
}

export default App;
