import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filter_products, grid_views } = useFilterContext();
  if (grid_views === true) {
    return <GridView products={filter_products} />;
  }
  if(grid_views === false){
      return <ListView products={filter_products}/>
      }
}

export default ProductList;