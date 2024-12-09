import React from 'react'
import { CategoryDetailComponent } from '../components/categories/categoriesdropdown'
import FilterSidebar from '../components/categories/filtersidebar'
import Pagination from '../components/categories/pagination'
import ProductGrid from '../components/categories/categoryproduct'

const CategoryProduct = () => {
  return (
    <div>

      <CategoryDetailComponent/>
      <div className='flex'>
        
      <FilterSidebar/>
      
    
      <ProductGrid />  
 
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryProduct
