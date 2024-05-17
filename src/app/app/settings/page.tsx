import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageContent,
} from '@/components/dashboard/dashboard-page'

export default function Settings() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageContent>
        <h1>Configurações</h1>
      </DashboardPageContent>
    </DashboardPage>
  )
}
