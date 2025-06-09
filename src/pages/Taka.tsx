import { Button } from '@/components/ui/button'
import { takaItems } from '@/data/products'
import { DocumentText, Heart, Share } from 'iconsax-react'
import React from 'react'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { DrawerDemo } from '@/components/productDrawer'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import SmTaka from '@/components/sm-taka'
import ProductSection from '@/components/productSection'

function Taka() {
  return (
    <div className=" flex flex-col gap-4 mb-20 md:mb-4">
      <ProductSection title="Trending" itemList={takaItems} />
      <ProductSection title="Deals" itemList={takaItems} />
    </div>
  )
}

export default Taka
