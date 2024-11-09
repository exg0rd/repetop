import { addTutorSchema, LoginFormSchema } from "../../lib/definitions";

export function loginValidate(formData: { email: string; password: string }) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.email,
        password: formData.password,
    });

    if (!validatedFields.success) {
        return {
            isValid: false,
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    return { isValid: true, data: validatedFields.data };
}

export function addTutorValidate(formData: {name: string; surname: string; patronym: string; email: string; phone: string;}) {
    const validatedFields = addTutorSchema.safeParse({
        name: formData.name,
        surname: formData.surname,
        patronym: formData.patronym,
        email: formData.email,
        phone: formData.phone,
    })

    if (!validatedFields.success) {
        return {
            isValid: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    return {isValid: true, data: validatedFields.data}
}
