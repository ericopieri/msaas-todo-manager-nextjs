import { cn } from '@/lib/utils'
import React from 'react'

export type DashboardSidebarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardSidebar({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn([
        'border-r border-border flex flex-col space-y-6',
        className,
      ])}
    >
      {children}
    </aside>
  )
}
