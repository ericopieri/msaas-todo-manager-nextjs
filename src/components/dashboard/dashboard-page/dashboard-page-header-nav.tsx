import { cn } from '@/lib/utils'
import { DashboardPageGenericProps } from './dashboard-page'

export function DashboardPageHeaderNav({
  children,
  className,
}: DashboardPageGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}
