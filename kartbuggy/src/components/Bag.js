import React, { Component } from 'react';

class Bag extends Component {

  render() {

    let total = 0;

    if (this.props.bag.length > 0) {
      let runningTotal = 0;

      for (let i = 0; i < this.props.bag.length; i++) {
        console.log(this.props.bag[i].price)
        runningTotal += this.props.bag[i].price;
      }
      console.log(runningTotal)
      total = runningTotal;
    }

    const checkout = this.props.bag.map( shoes => {
      return(
        <div key={shoes.id}>
          <div>
            <img src={shoes.image}/>
            <div>
              <h4>{shoes.name}</h4>
              <h4>{shoes.brand}</h4>
              <p>price: <span>${shoes.price}</span></p>
              <p>qty: <input type="text" value="1" readOnly/></p>
            </div>
          </div>
        </div>
      )
    })

    return(
      <div>
        <h2>My Bag ({this.props.bag.length})</h2>
        <div>
          <div>
            {checkout}
          </div>
          <div>
            <h4>Summary</h4>
            <div>
              <p>subtotal <span>${total}</span></p>
              <p>free ground shipping <span>free</span></p>
              <p>estimated tax <span>-----</span></p>
            </div>
            <p>estimated total <span>${total}</span></p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bag;