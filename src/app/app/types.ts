import { Session } from 'next-auth'

export type PropsWithUser<Expansion = unknown> = {
  user: Session['user']
} & Expansion
