export type Todo = {
  id: string
  title: string
  done: boolean
  userId: string
  createdAt: Date
  updatedAt: Date | null
  doneAt: Date | null
}
