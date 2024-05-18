import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarNavContent({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}
