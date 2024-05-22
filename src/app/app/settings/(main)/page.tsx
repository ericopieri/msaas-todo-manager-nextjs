import { auth } from '@/services/auth'
import { ProfileForm } from './_components/form'

export default async function Settings() {
  const session = await auth()

  const user = session?.user

  return (
    <h1>
      <ProfileForm user={user} />
    </h1>
  )
}
