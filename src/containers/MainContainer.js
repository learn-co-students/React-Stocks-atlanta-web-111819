import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          onFilterChanged={this.props.onFilterChanged}
          stockFilter={this.props.stockFilter}

          onSortChanged={this.props.onSortChanged}
          sortAlphabetically={this.props.sortAlphabetically}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} onStockClick={this.props.onStockClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} onStockClick={this.props.onStockClick} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
