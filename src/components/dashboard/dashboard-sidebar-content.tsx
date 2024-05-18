import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarContent({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}
