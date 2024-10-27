import React, { forwardRef } from "react";

interface AuthFormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type: "username" | "password";
    description: string;
    errorDescription?: string | string[] | undefined;
    successDescription?: string | undefined;
}

const isStringArray = (errorDescription: string | string[] | undefined) => {
    return typeof errorDescription !== "string" && errorDescription;
};

const inputTypeMap = {
    email: "email",
    username: "text",
    password: "password",
    repeatPassword: "password",
};

export const AuthFormInput = forwardRef<HTMLInputElement, AuthFormInputProps>(
    ({ description, errorDescription, ...inputProps }, ref) => {
        return (
            <div className={inputProps.className}>
                <label className="block mb-2 text-lg font-extrabold text-blue-700">
                    {description}
                </label>
                <input
                    id={inputProps.type}
                    name={inputProps.type}
                    autoComplete="on"
                    placeholder={description}
                    required
                    ref={ref}
                    {...inputProps}
                    className="bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5"
                />
                {isStringArray(errorDescription) && errorDescription ? (
                    <ul className="mt-3 space-y-1 text-sm text-red-300">
                        {errorDescription.map((error: string) => (
                            <li key={error}>
                                <p className="mt-3 text-sm text-red-300">
                                    {error}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-3 text-sm text-red-300">
                        {errorDescription}
                    </p>
                )}
            </div>
        );
    }
);

export default AuthFormInput;