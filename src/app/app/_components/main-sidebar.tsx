'use client'

import {
  Sidebar,
  SiderbarHeader,
  SiderbarContent,
  SidebarNav,
  SidebarNavContent,
  SidebarNavLink,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SiderbarFooter,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'

export default function MainSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SiderbarHeader>
        <h1></h1>
      </SiderbarHeader>

      <SiderbarContent className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavContent>
            <SidebarNavLink href="/app" active={isActive('/app')}>
              Tarefas
            </SidebarNavLink>
            <SidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              Configurações
            </SidebarNavLink>
          </SidebarNavContent>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavContent>
            <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavContent>
        </SidebarNav>
      </SiderbarContent>

      <SiderbarFooter>User</SiderbarFooter>
    </Sidebar>
  )
}
