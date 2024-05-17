import { PropsWithChildren } from 'react'
import MainSidebar from './_components/main-sidebar'
import { auth } from '@/services/auth'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()

  const user = session?.user

  return (
    <div className="grid grid-cols-[20rem_1fr] h-screen">
      <MainSidebar user={user} />
      <main>{children}</main>
    </div>
  )
}
