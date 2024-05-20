import { DashboardPage } from '@/components/dashboard/dashboard-page'
import { TodoDataTable } from './_components/todo-data-table'
import { TodoUpsertSheet } from './_components/todo-upsert-sheet'
import { Button } from '@/components/ui/button'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { getUserTodos } from './actions'

export default async function Page() {
  const data = await getUserTodos()

  return (
    <DashboardPage.Root>
      <DashboardPage.Header>
        <DashboardPage.HeaderTitle>Tarefas</DashboardPage.HeaderTitle>
        <TodoUpsertSheet>
          <Button variant="default" className="ml-auto">
            <PlusCircledIcon className="w-5 h-5 mr-1" />
            Add New
          </Button>
        </TodoUpsertSheet>
      </DashboardPage.Header>
      <DashboardPage.Content>
        <TodoDataTable data={data}></TodoDataTable>
      </DashboardPage.Content>
    </DashboardPage.Root>
  )
}
