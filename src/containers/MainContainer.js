import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks: [],
    porStocks: [],
    sort: [],
    filter: 'None'

  }


  handleFilter = (filter) => {
    console.log(filter);


    if(this.state.filter !== filter){
      this.setState({filter: filter})
    }

    let newArray = filter === 'None'? this.state.stocks : this.state.stocks.filter(stock => stock.type === filter)
    console.log(newArray);
    
    return this.handleSort(newArray)
  }



  handleSort = (Array) => {
    if(this.state.sort.length < 1){
      return <StockContainer stocks={Array} handleSave={this.handleSave}/>
    }
    let newArray = Array
    if(this.state.sort.includes('Price')){
      newArray = newArray.sort((a,b) => a.price - b.price)
    }
    if(this.state.sort.includes('Alphabetically')){
      newArray = newArray.sort((a,b) =>{ return a.name.localeCompare(b.name) })
    }
    return <StockContainer stocks={newArray} handleSave={this.handleSave}/>

  }



  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        stocks: stocks
      })
    })
  }

  handleSave = (stock) => {
    console.log(stock);
    if(this.state.porStocks.includes(stock)){
      let newArray = this.state.porStocks.filter(oldStock => oldStock.name !== stock.name )
      this.setState({porStocks: newArray})
    }else{
      this.setState({
        porStocks: [...this.state.porStocks, stock]
      })
    }
    
  }


  handleCheck = (e) => {
    console.log(e.target);
    this.setState({
      sort: [...this.state.sort, e.target.value]
    })
  }




  render() {
    return (
      <div>
        <SearchBar handleCheck={this.handleCheck} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

           {this.handleFilter(this.state.filter)}

            </div>
            <div className="col-4">

              <PortfolioContainer porStocks={this.state.porStocks} handleSave={this.handleSave}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
