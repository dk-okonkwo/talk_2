'use client'

import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Briefcase, Sms, Setting2, type Icon } from 'iconsax-react'

const links = ['Workshop', 'Messages', 'Settings']
const linkIcons: Icon[] = [Briefcase, Sms, Setting2]

export function ProfileMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3">
        {links.map((title, index) => {
          const path = `/${title.toLowerCase()}`
          const Icon = linkIcons[index]
          return (
            <NavigationMenuItem key={title} className="h-auto w-auto">
              <NavigationMenuLink asChild>
                <Link to={path} className={navigationMenuTriggerStyle()}>
                  <div className="flex flex-col items-center gap-1">
                    <Icon className="!w-5 !h-5 stroke-[var(--primary)]" />
                    <span className="text-xs">{title}</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
