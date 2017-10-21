import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {

    console.log(this.props.id)

    const shoes = this.props.shoes.map( shoe => {
      return(
        <span key={shoe.id}>
          <div>
            <img src={shoe.image} alt=""/>
            <div>
              <h4>{shoe.name}</h4>
              <h4>{shoe.brand}</h4>
              <button>
                <Link to={'/shoes/' + shoe.id}>View Details</Link>
              </button>
            </div>
          </div>
        </span>
        )
      })
      return(
        <div>
          <h2>View All ({this.props.shoes.length})</h2>
          <div>
          {shoes}
          </div>
        </div>
      )
    }
}

export default Home;