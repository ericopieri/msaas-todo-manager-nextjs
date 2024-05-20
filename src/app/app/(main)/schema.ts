import { z } from 'zod'

export const upsertTodoSchema = z.object({
  title: z.string().max(25).optional(),
  id: z.string().max(25).optional(),
  doneAt: z.date().optional(),
})

export type UpsertTodoType = z.infer<typeof upsertTodoSchema>
