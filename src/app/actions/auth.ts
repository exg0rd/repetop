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

export const genRandomString = (LENGTH: number) => {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';

  const PASSSWORD = [];

  for (let i = 0; i < LENGTH; i++) {
      PASSSWORD.push(i % 2 === 0 ? NUMBERS[Math.floor(Math.random() * NUMBERS.length)] : LETTERS[Math.floor(Math.random() * LETTERS.length)])
  }
  
  return PASSSWORD.join('');

}