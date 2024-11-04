import { addTutorSchema, LoginFormSchema } from "../../lib/definitions";

export function loginValidate(formData: { username: string; password: string }) {
    const validatedFields = LoginFormSchema.safeParse({
        username: formData.username,
        password: formData.password,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { username, password } = validatedFields.data;
    return { username, password };
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
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const {name, surname, patronym, email, phone} = validatedFields.data;
    return {name, surname, patronym, email, phone}
}
