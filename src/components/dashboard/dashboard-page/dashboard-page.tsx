import { cn } from '@/lib/utils'
import React from 'react'

export type DashboardPageGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardPage({
  children,
  className,
}: DashboardPageGenericProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}
