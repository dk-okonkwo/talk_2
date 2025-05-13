import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import CarouselDemo from '@/components/CarouselDemo'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlbumArtwork } from '@/components/ui/album-artwork'
import { type Album } from '@/data/album'
import {
  CloseCircle,
  More,
  Like1,
  SmsTracking,
  ArchiveAdd,
} from 'iconsax-react'
import robo from '../assets/images/robo.jpg'
import bm from '../assets/images/bmw2.jpg'

export function DialogDemo({ album, index }: { album: Album; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AlbumArtwork album={album} />
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center bg-transparent border-0 shadow-none !max-w-auto sm:!max-w-auto">
        <CarouselDemo key={index} start={index} />
      </DialogContent>
    </Dialog>
  )
}
