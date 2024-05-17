import {
  DashboardPage,
  DashboardPageContent,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
} from '@/components/dashboard/dashboard-page'

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageContent>
        <h1>Tarefas</h1>
      </DashboardPageContent>
    </DashboardPage>
  )
}
