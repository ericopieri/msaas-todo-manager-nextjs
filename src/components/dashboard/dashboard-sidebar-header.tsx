import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarHeader({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <header className={cn(['p-6 border-b border-border', className])}>
      {children}
    </header>
  )
}
