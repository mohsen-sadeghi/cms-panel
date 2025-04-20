import React from 'react'
import ProductBox from '../../components/ProductsBox/ProductBox'

function Products() {
  return (
    <div className=' overflow-hidden'>
    {/* <ErrorBox errorText="هیچ محصولی یافت نشد"/> */}
    <h1 className='mt-4 text-xl font-bold text-neutral-950 dark:text-rose-50'>لیست محصولات : </h1>
    <ProductBox/>
  </div>
  )
}

export default Products