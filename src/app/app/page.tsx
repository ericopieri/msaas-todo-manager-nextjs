import { DashboardPage } from '@/components/dashboard/dashboard-page'

export default function Page() {
  return (
    <DashboardPage.Root>
      <DashboardPage.Header>
        <DashboardPage.HeaderTitle>Tarefas</DashboardPage.HeaderTitle>
      </DashboardPage.Header>
      <DashboardPage.Content>
        <h1>Tarefas</h1>
      </DashboardPage.Content>
    </DashboardPage.Root>
  )
}
