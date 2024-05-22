'use client'

import { DashboardSidebar } from '@/components/dashboard'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebar.Nav>
        <DashboardSidebar.NavContent className="!text-right">
          <DashboardSidebar.NavLink
            href="/app/settings"
            active={isActive('/app/settings')}
          >
            Meu Perfil
          </DashboardSidebar.NavLink>
          <DashboardSidebar.NavLink
            href="/app/settings/theme"
            active={isActive('/app/settings/theme')}
          >
            Tema
          </DashboardSidebar.NavLink>
          <DashboardSidebar.NavLink
            href="/app/settings/billing"
            active={isActive('/app/settings/billing')}
          >
            Faturamento
          </DashboardSidebar.NavLink>
        </DashboardSidebar.NavContent>
      </DashboardSidebar.Nav>
    </aside>
  )
}
