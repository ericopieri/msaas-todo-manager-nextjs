import { cn } from '@/lib/utils'
import { DashboardPageGenericProps } from './dashboard-page'

export function DashboardPageHeader({
  children,
  className,
}: DashboardPageGenericProps) {
  return (
    <header
      className={cn([
        'p-6 border-b border-border flex flex-row items-center justify-between',
        className,
      ])}
    >
      {children}
    </header>
  )
}
