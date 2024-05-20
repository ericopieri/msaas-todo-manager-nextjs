import { auth } from '@/services/auth'
import { prisma } from '@/services/database'

export async function getUserTodos() {
  const session = await auth()

  const todos = prisma.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
  })

  return todos
}
