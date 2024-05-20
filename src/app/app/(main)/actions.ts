'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { UpsertTodoType } from './schema'

export async function getUserTodos() {
  const session = await auth()

  const todos = prisma.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return todos
}

export async function upsertToDo({ title, id, doneAt }: UpsertTodoType) {
  const session = await auth()

  const userId = session?.user?.id

  if (userId === undefined) {
    return {
      error: 'User is not Authorized.',
      data: null,
    }
  }

  if (id) {
    try {
      const todo = prisma.todo.findUnique({
        where: {
          id,
          userId,
        },
      })

      if (!todo) {
        return {
          error: 'ToDo not found.',
          data: null,
        }
      }

      const updatedTodo = await prisma.todo.update({
        where: {
          id,
        },
        data: {
          title,
          doneAt,
        },
      })

      return {
        error: null,
        data: updatedTodo,
      }
    } catch (err) {
      return {
        error: 'An error has occurred during the update of a ToDo.',
        data: null,
      }
    }
  }

  if (title === undefined) {
    return {
      error: 'Todos with empty titles cannot be created.',
      data: null,
    }
  }

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        userId,
      },
    })

    return {
      error: null,
      data: todo,
    }
  } catch (err) {
    return {
      error: 'An error has occurred during the creation of a ToDo.',
      data: null,
    }
  }
}
