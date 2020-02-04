import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filter: 'All',
      sort: 'none'
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        stocks: stocks
      })
    })
  }

  handleClick=(stock, action)=>{
    switch(action){
      case 'buy':
        this.addToPort(stock)
        break
      case 'sell':
        this.removeFromPort(stock)
        break
    }
  }
  
  addToPort=(stock)=>{
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })

  }

  removeFromPort=(stock)=>{
    let newArr = this.state.portfolio.filter(sto => sto.id !== stock.id)
    this.setState({
      portfolio: newArr
    })
  }

  handleFilterChange=(e)=>{
    this.setState({
      filter: e.target.value
    })
  }

  filterStocks=(stocks)=>{

    switch(this.state.filter){
      case 'Tech':
        return stocks.filter(sto => sto.type === 'Tech')
        break
      case 'Sportswear':
        return stocks.filter(sto => sto.type === 'Sportswear')
        break
      case 'Finance':
        return stocks.filter(sto => sto.type === 'Finance')
        break
      default:
        return stocks
    }
  }


  handleSort=(e)=>{
    this.setState({
      sort: e.target.value
    })

  }

  sortStocks=(stocks)=>{
    switch(this.state.sort){
      case 'Alphabetically':
        return stocks.slice().sort((a,b)=> a.ticker.localeCompare(b.ticker))
        break
      case 'Price':
        return stocks.slice().sort((a,b)=>{return a.price - b.price})
        break
      default:
        return stocks
    }

  }

  apply=()=>{
    return this.filterStocks(this.sortStocks(this.state.stocks))
  }

  render() {
    return (
      <div>
        <SearchBar handleFilterChange={this.handleFilterChange} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.apply()} handleClick={this.handleClick} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
