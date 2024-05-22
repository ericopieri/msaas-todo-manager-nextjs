'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { UpdateProfileType } from './schemas'

export async function upsertProfile({ name }: UpdateProfileType) {
  const session = await auth()

  const userId = session?.user?.id

  if (userId === undefined) {
    return {
      error: 'User is not Authorized.',
      data: null,
    }
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  })
}
