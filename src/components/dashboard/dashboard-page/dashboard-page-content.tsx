import { DashboardPageGenericProps } from './dashboard-page'
import { cn } from '../../../lib/utils'

export function DashboardPageContent({
  children,
  className,
}: DashboardPageGenericProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
