import { DashboardPage } from '@/components/dashboard/dashboard-page'
import { PropsWithChildren } from 'react'
import { SettingsSidebar } from './(main)/_components/settings-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage.Root>
      <DashboardPage.Header>
        <DashboardPage.HeaderTitle>Configurações</DashboardPage.HeaderTitle>
      </DashboardPage.Header>
      <DashboardPage.Content>
        <div className="grid grid-cols-[20rem_1fr] gap-12 h-screen">
          <SettingsSidebar />
          <div>{children}</div>
        </div>
      </DashboardPage.Content>
    </DashboardPage.Root>
  )
}
