import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarHeaderTitle({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <h2 className={cn(['', className])}>{children}</h2>
}
