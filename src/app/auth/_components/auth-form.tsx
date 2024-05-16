'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from '@/components/ui/use-toast'

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', {
        email: data.email,
        redirect: false,
      })

      toast({
        title: 'Magic Link Sent',
        description: 'A magic link has been sent to your email.',
        duration: 5000,
      })
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An error occurred while signing in.',
        duration: 5000,
      })
    }
  })

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Sign in with a Magic Link
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enter your email below and we will send you a magic link to sign in.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...form.register('email')}
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </form>
      </div>
    </div>
  )
}
