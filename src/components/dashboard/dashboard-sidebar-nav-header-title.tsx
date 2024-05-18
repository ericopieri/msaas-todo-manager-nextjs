import { cn } from '@/lib/utils'
import { DashboardSidebarGenericProps } from './dashboard-sidebar'

export function DashboardSidebarNavHeaderTitle({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <div
      className={cn([
        'text-[0.6rem] uppercase text-muted-foreground ml-3',
        className,
      ])}
    >
      {children}
    </div>
  )
}
