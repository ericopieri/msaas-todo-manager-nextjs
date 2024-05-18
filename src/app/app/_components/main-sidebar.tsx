'use client'

import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { UserDropdown, UserDropdownProps } from './user-dropdown'
import Logo from '@/components/logo'
import { DashboardSidebar } from '@/components/dashboard'

export type MainDashboardSidebarProps = UserDropdownProps

export default function MainDashboardSidebar({
  user,
}: MainDashboardSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  console.log(DashboardSidebar)

  return (
    <DashboardSidebar.Root>
      <DashboardSidebar.Header>
        <Logo />
      </DashboardSidebar.Header>

      <DashboardSidebar.Content className="flex flex-col flex-grow">
        <DashboardSidebar.Nav>
          <DashboardSidebar.NavContent>
            <DashboardSidebar.NavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="w-5 h-5 mr-3" />
              Tarefas
            </DashboardSidebar.NavLink>
            <DashboardSidebar.NavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-5 h-5 mr-3" />
              Configurações
            </DashboardSidebar.NavLink>
          </DashboardSidebar.NavContent>
        </DashboardSidebar.Nav>

        <DashboardSidebar.Nav className="mt-auto">
          <DashboardSidebar.NavHeader>
            <DashboardSidebar.NavHeaderTitle>
              Links extras
            </DashboardSidebar.NavHeaderTitle>
          </DashboardSidebar.NavHeader>
          <DashboardSidebar.NavContent>
            <DashboardSidebar.NavLink href="/">
              Precisa de ajuda?
            </DashboardSidebar.NavLink>
            <DashboardSidebar.NavLink href="/">Site</DashboardSidebar.NavLink>
          </DashboardSidebar.NavContent>
        </DashboardSidebar.Nav>
      </DashboardSidebar.Content>

      <DashboardSidebar.Footer>
        <UserDropdown user={user} />
      </DashboardSidebar.Footer>
    </DashboardSidebar.Root>
  )
}
