'use client'

import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { UserDropdown, UserDropdownProps } from './user-dropdown'
import Logo from '@/components/logo'
import {
  DashboardSidebarNavContent,
  DashboardSidebarNavLink,
  DashboardSidebarFooter,
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarContent,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
} from '@/components/dashboard/dashboard-sidebar'

export type MainDashboardSidebarProps = UserDropdownProps

export default function MainDashboardSidebar({
  user,
}: MainDashboardSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>

      <DashboardSidebarContent className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavContent>
            <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="w-5 h-5 mr-3" />
              Tarefas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-5 h-5 mr-3" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavContent>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavContent>
            <DashboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavContent>
        </DashboardSidebarNav>
      </DashboardSidebarContent>

      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
