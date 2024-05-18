import { cn } from '@/lib/utils'
import { DashboardPageGenericProps } from './dashboard-page'

export function DashboardPageHeaderTitle({
  children,
  className,
}: DashboardPageGenericProps) {
  return (
    <h1 className={cn(['text-muted-foreground uppercase', className])}>
      {children}
    </h1>
  )
}
