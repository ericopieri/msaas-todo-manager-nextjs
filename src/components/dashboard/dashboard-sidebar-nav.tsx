import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarNav({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}
