import React, { Component } from 'react';

class Sneakers extends Component {

  buySneakers(id){
    this.props.onChangeValue({
      id: id,
    });
  }

  render() {

    const shoes = this.props.shoes.map(shoe => {
      if (shoe.category === "sneakers") {
        return(
          <div key={shoe.id}>
            <img src={shoe.image} alt=""/>
            <div>
              <h4>{shoe.name}</h4>
              <h4>{shoe.brand}</h4>
              <p>${shoe.price}</p>
              <button onClick={() => this.buySneakers(shoe.id)}>Add to Bag</button>
            </div>
          </div>
        )
      }
    })
    return(
      <div>
        <h2>Sneakers</h2>
        <div>
        {shoes}
        </div>
      </div>
    )
  }
}

export default Sneakers;