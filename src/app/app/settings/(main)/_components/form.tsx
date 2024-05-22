'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/use-toast'
import { UpdateProfileType, updateProfileSchema } from '../schemas'
import { upsertProfile } from '../actions'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { PropsWithUser } from '@/app/app/types'

export function ProfileForm({ user }: PropsWithUser) {
  const router = useRouter()

  const defaultValues = {
    email: user?.email ?? '',
    name: user?.name ?? '',
  }

  const form = useForm<UpdateProfileType>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues,
  })

  const onSubmit = form.handleSubmit(async (data, event) => {
    event?.preventDefault()

    await upsertProfile(data)

    router.refresh()

    toast({
      duration: 5000,
      title: 'Success!',
      description: 'Profile successfully updated.',
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8 mt-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the field for the user&apos;s name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input readOnly placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                To change your email, please contact contato@micro-saas.com
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </form>
    </Form>
  )
}
