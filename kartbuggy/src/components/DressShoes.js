import React, { Component } from 'react';

class DressShoes extends Component {

  buyDress(id){
    this.props.onChangeValue({
      id: id,
    });
  }

  render() {

    const shoes = this.props.shoes.map( shoe => {
      if (shoe.category === "dressy") {
        return(
          <div key={shoe.id}>
            <img src={shoe.image} alt=""/>
            <div>
              <h4>{shoe.name}</h4>
              <h4>{shoe.brand}</h4>
              <p>${shoe.price}</p>
              <button onClick={() => this.buyDress(shoe.id)}>Add to Bag</button>
            </div>
          </div>
        )
      }
    })
    return(
      <div>
        <h2>Dress Shoes</h2>
        <div>
        {shoes}
        </div>
      </div>
    )
  }
}

export default DressShoes;