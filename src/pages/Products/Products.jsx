import React from 'react'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import AddProducts from '../../Components/AddProducts/AddProducts'
import ProductsTable from '../../Components/ProductsTable/ProductsTable'
import Pagination from '../../Components/Pagination/Pagination'


export default function Products() {
  return (
    <div className=' overflow-hidden'>
      {/* <ErrorBox errorText="هیچ محصولی یافت نشد"/> */}
      <h1 className='mt-4 text-xl font-bold text-neutral-950 dark:text-rose-50'>لیست محصولات : </h1>
      <ProductsTable/>
    </div>
  )
}
