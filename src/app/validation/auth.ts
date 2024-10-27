import { LoginFormSchema } from "../../lib/definitions";

export function loginValidate(formData: { username: string; password: string }) {
    const validatedFields = LoginFormSchema.safeParse({
        username: formData.username,
        password: formData.password,
    });

    console.log(formData.username, formData.password);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { username, password } = validatedFields.data;
    return { username, password };
}
