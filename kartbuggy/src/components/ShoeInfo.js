import React, { Component } from 'react';

class ShoeInfo extends Component {

  buyShoe(id){
    this.props.onChangeValue({
      id: id,
    });
  }

  render() {

    const shoe = this.props.shoes[this.props.match.params.id];
    console.log(shoe)

    return(
      <div key={shoe.id}>
        <img src={shoe.image}/>
        <div>
          <h4>{shoe.name}</h4>
          <h4>{shoe.brand}</h4>
          <p>${shoe.price}</p>
          <button onClick={() => this.buyShoe(shoe.id)}>Add to Bag</button>
        </div>
      </div>
    )
  }
}

export default ShoeInfo;