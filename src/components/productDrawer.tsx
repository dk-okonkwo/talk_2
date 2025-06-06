'use client'

import * as React from 'react'
import { Minus, Plus } from 'lucide-react'
// import { Bar, BarChart, ResponsiveContainer } from 'recharts'

import { Button } from '@/components/ui/button'
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { takaItem } from '@/data/products'
import { useState } from 'react'
import StarReview from './StarReview'

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerDemo({ item }: { item: takaItem }) {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const [current, setCurrent] = useState(0)

  return (
    <DrawerContent className="!min-h-[95vh] md:!min-h-[85vh] z-500">
      <div className="mx-auto w-full max-w-sm bg-green-300 overflow-y-scroll overflow-x-hidden">
        <DrawerHeader>
          <DrawerTitle>{item.name}</DrawerTitle>
          <DrawerDescription>
            {item.discount > 0 ? (
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  ₦{(item.price * (100 - item.discount)) / 100}
                </span>
                <s className="text-gray-500">₦{item.price}</s>
              </div>
            ) : (
              <span className="font-bold">₦{item.price}</span>
            )}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-3 pb-0 flex flex-col items-center">
          <div className="w-90/100 aspect-square bg-gray-100 rounded-xs border border-gray-300 flex items-center justify-center">
            <div
              className="w-90/100 aspect-square"
              style={{
                backgroundImage: `url(${item.imgUrls[current]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>

          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-95/100 max-w-95/100 relative mt-5 bg-gray-100 border border-gray-300"
          >
            <CarouselContent className="">
              {item.imgUrls.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-7/24 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Button
                      className={`w-full !aspect-square h-full rounded-xs ${current == index && 'border-3 border-[var(--primary)]'} !p-0 overflow-hidden`}
                      onClick={() => setCurrent(index)}
                    >
                      <div
                        className="w-full aspect-square"
                        style={{
                          backgroundImage: `url(${item.imgUrls[index]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] primary-bg stroke-white" />
            <CarouselNext className="absolute right-[-20px] primary-bg stroke-white" />
          </Carousel>
          <div className='flex flex-col gap-3 w-full mt-3 pl-2'>
            <StarReview review={item.rating} />
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={item.owner[1]} alt="item owner" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <span>{item.owner[0]}</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(-10)}
              disabled={goal <= 200}
            >
              <Minus />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter">{goal}</div>
              <div className="text-muted-foreground text-[0.70rem] uppercase">
                Calories/day
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(10)}
              disabled={goal >= 400}
            >
              <Plus />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          {/* <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: 'hsl(var(--foreground))',
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  )
}
