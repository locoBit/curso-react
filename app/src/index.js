import React from 'react'
import ReactDOM from 'react-dom'

import FilterableProductTable from './components/FilterableProductTable'

let db = [
  { category: 'sport', price: "$2111", stocked: true, name: 'Football' },
  { category: 'sport', price: "$698", stocked: true, name: 'Baseball' },
  { category: 'sport', price: "$9875", stocked: true, name: 'Basquetball' },
  { category: 'sport', price: "$235", stocked: true, name: 'Tenis' },
  { category: 'electronics', price: "$45", stocked: true, name: 'Gameboy' },
  { category: 'electronics', price: "$25", stocked: true, name: 'Tetris' },
  { category: 'electronics', price: "$35", stocked: true, name: 'Tamagochi' }
];

const app = document.getElementById('app');
ReactDOM.render(<FilterableProductTable store={ db }/>, app);
