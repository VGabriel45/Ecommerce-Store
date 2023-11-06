import { Product } from '@/types'
import React from 'react'

import NoResults from '@/components/ui/no-results'
import Grid from '@/components/ui/grid'

interface ProductListProps {
    title: string
    items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({title, items}) => {
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        {items.length === 0 && <NoResults />}
        <Grid items={items} />
    </div>
  )
}

export default ProductList