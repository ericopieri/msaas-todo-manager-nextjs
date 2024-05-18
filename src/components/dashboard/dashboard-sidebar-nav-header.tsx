import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarNavHeader({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}
