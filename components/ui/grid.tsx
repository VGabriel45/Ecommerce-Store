import { Product } from '@/types'
import React from 'react'

import ProductCard from '@/components/ui/product-card'

export interface GridProps {
    items: Product[]
}

const Grid: React.FC<GridProps> = ({items}) => {
    console.log(items);
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {items.map(item => (<div key={item.id}>
        <ProductCard key={item.id} data={item}/>
       </div>))}
    </div>
  )
}

export default Grid