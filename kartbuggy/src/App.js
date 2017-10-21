
import React, { Component } from 'react';
import {Route, Switch, Link, withRouter } from 'react-router-dom';

import shoeList from './data/shoelist';
import Home from './components/Home';
import Sneakers from './components/Sneakers';
import DressShoes from './components/DressShoes';
import Boots from './components/Boots';
import Bag from './components/Bag';
import ShoeInfo from './components/ShoeInfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeList: shoeList,
      shoppingBag: [],
    }
  }

  handlePurchase(event){
    for (let i = 0; i < shoeList.length; i++) {
      if (event.id === shoeList[i].id) {
        console.log(shoeList[i]);
        this.setState({ shoppingBag: this.state.shoppingBag.concat([shoeList[i]])},
      () => console.log(this.state.shoppingBag));
      }
    }
  }

  render() {
    const RenderHome = (props) => {
      return(
        <Home shoes={this.state.shoeList} />
      )
    }

    const RenderDressShoes = (props) => {
      return(
        <DressShoes shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    const RenderSneakers = (props) => {
      return(
        <Sneakers shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    const RenderBoots = (props) => {
      return(
        <Boots shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    const RenderBag = (props) => {
      return(
        <Bag bag={this.state.shoppingBag}/>
      )
    }

    const RenderShoes = (props) => {
      return (
        <ShoeInfo {...props} shoes={this.state.shoeList} onChangeValue={(event) => this.handlePurchase(event)}/>
      )
    }

    return (
      <div className="App">
        <header>
          <div className="title">
            <h3>Ebay Schmebay</h3>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/DressShoes">Dress Shoes</Link></li>
              <li><Link to="/Sneakers">Sneakers</Link></li>
              <li><Link to="/boots">Boots</Link></li>
              <li><Link to="/shopping_bag">{this.state.shoppingBag.length}</Link></li>
            </ul>
          </nav>
        </header>

        <main className="wrapper">
          <Switch>
            <Route path="/shoes/:id" render={RenderShoes}/>
            <Route path="/DressShoes" render={RenderDressShoes} />
            <Route path="/Sneakers" render={RenderSneakers} />
            <Route path="/boots" render={RenderBoots} />
            <Route path="/shopping_bag" render={RenderBag} />
            <Route path="/" render={RenderHome}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);