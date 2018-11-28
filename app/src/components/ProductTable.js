import React from 'react'

import ProductCategoryRaw from './ProductCategoryRaw'
import ProductRaw from './ProductRaw'

export default class ProductTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    
    let rows = [];
    let lastCategory = null;

    if (this.props.products) {
      this.props.products.forEach(product => {
        if (product.category != lastCategory) {
          rows.push(<ProductCategoryRaw category={ product.category } key={ product.category }/>)
        }

        rows.push(<ProductRaw name={ product.name } key={ product.name } />);

        lastCategory = product.category;
      });
    } else {
      rows.push(<h1>Loading</h1>)
    }

    return (
      <div>
        { rows }
      </div>
    );
  }
}