import { cn } from '@/lib/utils'
import Link from 'next/link'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

type DashboardSidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function DashboardSidebarNavLink({
  className,
  children,
  href,
  active,
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn([
        'flex items-center text-sm px-3 py-2 rounded-md',
        active && 'bg-secondary',
        className,
      ])}
    >
      {children}
    </Link>
  )
}
