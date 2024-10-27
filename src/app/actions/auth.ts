import { LoginFormSchema, FormState } from '@/lib/definitions'
 
export async function login(state: FormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}