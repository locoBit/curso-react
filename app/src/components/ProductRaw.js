import React from 'react'

export default class ProductRaw extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h6>{ this.props.name }</h6>
    );
  }
}