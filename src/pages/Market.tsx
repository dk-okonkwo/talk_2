import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link, Outlet, useRouterState } from '@tanstack/react-router'

function Market() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const segments = pathname.split('/') // Splits into ['', 'market', 'products']
  const lastSegment = segments[segments.length - 1] // Gets 'products'
  const title = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)

  return (
    <div>
      <div className="p-2 flex items-center justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-lg md:text-xl">
                  <span>Marketplace</span>
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <Link to="/market/products">
                    <DropdownMenuItem className="text-lg">
                      Products
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/market/services">
                    <DropdownMenuItem className="text-lg">
                      Services
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/market/taka">
                    <DropdownMenuItem className="text-lg">
                      Taka
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg md:text-xl">
                {title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Market
