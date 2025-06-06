import { Button } from '@/components/ui/button'
import { takaItems } from '@/data/products'
import { DocumentText, Heart, Share } from 'iconsax-react'
import React from 'react'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { DrawerDemo } from '@/components/productDrawer'

function Taka() {
  return (
    <div className="">
      <div className="flex flex-col">
        <span className="font-bold text-2xl">Trending</span>
        <div className="flex items-center gap-5 overflow-x-scroll w-full mt-5 pb-2">
          {takaItems.map((item, index) => (
            <div
              key={index}
              className="w-45 h-68 min-w-43 overflow-hidden rounded-sm accent-bg relative group/product"
            >
              <div
                className="h-45 w-auto"
                style={{
                  backgroundImage: `url(${item.imgUrls[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <div className="pl-2 pt-1 flex flex-col">
                <span className="font-bold text-sm md:text-lg">
                  {item.name}
                </span>
                <span className="font-bold text-xs text-gray-500">
                  {item.owner[0]}
                </span>
                {item.discount > 0 ? (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold">
                      ₦{(item.price * (100 - item.discount)) / 100}
                    </span>
                    <s className="text-gray-500">₦{item.price}</s>
                  </div>
                ) : (
                  <span className="font-bold text-sm">₦{item.price}</span>
                )}
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="!flex items-center gap-1 !p-1.5 !shadow-none cursor-pointer group md:!hidden w-fit h-fit rounded-xs">
                      <DocumentText className="stroke-white w-5 h-5" />
                      <span className="text-white text-xs">View Details</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerDemo item={item} />
                </Drawer>
              </div>
              {item.discount > 0 && (
                <div className="absolute right-2 top-2 h-10 w-10 flex items-center justify-center bg-red-400 rounded-full text-gray-800 font-bold t">
                  -{item.discount}%
                </div>
              )}
              <div className="hidden bg-gray-600/90 group-hover/product:!flex flex-col items-center justify-end absolute inset-0 z-200 gap-3">
                <Button className="rounded-xs w-40 bg-white primary-text hover:!text-white">
                  Message
                </Button>
                <div className="flex flex-col">
                  <Button className="flex items-center gap-1 !p-0 !bg-transparent !shadow-none cursor-pointer group">
                    <Share className="stroke-white w-5 h-5 group-hover:!stroke-[var(--primary)]" />
                    <span className="text-white text-xs group-hover:!text-[var(--primary)]">
                      Share
                    </span>
                  </Button>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button className="flex items-center gap-1 !p-0 !bg-transparent !shadow-none cursor-pointer group">
                        <DocumentText className="stroke-white w-5 h-5 group-hover:!stroke-[var(--primary)]" />
                        <span className="text-white text-xs group-hover:!text-[var(--primary)]">
                          Description
                        </span>
                      </Button>
                    </DrawerTrigger>
                    <DrawerDemo item={item} />
                  </Drawer>
                  <Button className="flex items-center gap-1 !p-0 !bg-transparent !shadow-none cursor-pointer group">
                    <Heart className="stroke-white w-5 h-5 group-hover:!stroke-[var(--primary)]" />
                    <span className="text-white text-xs group-hover:!text-[var(--primary)]">
                      Save
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Taka
