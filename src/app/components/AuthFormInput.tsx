import React from "react";
import { Input } from "@/components/ui/input";

interface AuthFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type: "email" | "password";
    description: string;
    errorDescription?: string | string[] | undefined;
    successDescription?: string | undefined;
}

const isStringArray = (errorDescription: string | string[] | undefined) => {
    return typeof errorDescription !== "string" && errorDescription;
};

export const AuthFormInput = React.forwardRef<HTMLInputElement, AuthFormInputProps>(
    ({ description, errorDescription, ...inputProps }, ref) => {
        return (
            <div className={inputProps.className}>
                <label className="block mb-2 text-lg font-extrabold text-blue-700">
                    {description}
                </label>
                <Input
                    {...inputProps}
                    ref={ref}
                    id={inputProps.id || inputProps.name}
                    name={inputProps.name}
                    className="bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5"
                />
                {isStringArray(errorDescription) && errorDescription ? (
                    <ul className="mt-3 space-y-1 text-sm text-red-300">
                        {errorDescription.map((error: string) => (
                            <li key={error}>
                                <p className="mt-3 text-sm text-red-300">{error}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-3 text-sm text-red-300">{errorDescription}</p>
                )}
            </div>
        );
    }
);

export default AuthFormInput;
