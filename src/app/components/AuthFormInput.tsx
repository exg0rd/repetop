import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";

interface AuthFormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type: "email" | "password";
    description: string;
    errorDescription?: string | string[] | undefined;
    successDescription?: string | undefined;
}

const isStringArray = (errorDescription: string | string[] | undefined) => {
    return typeof errorDescription !== "string" && errorDescription;
};

export const AuthFormInput = React.forwardRef<
    HTMLInputElement,
    AuthFormInputProps
>(({ description, errorDescription, ...inputProps }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
        <div className={inputProps.className}>
            <label className="block mb-2 text-lg font-extrabold text-blue-700">
                {description}
            </label>
            <Input
                {...inputProps}
                type={passwordVisible ? "text" : "password"}
                ref={ref}
                id={inputProps.id || inputProps.name}
                name={inputProps.name}
                className="bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5"
            />
            {inputProps.type === "password" && (
                <Eye
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute top-[44px] right-3"
                />
            )}
            <p className="mt-3 text-sm text-red-300">{errorDescription}</p>
        </div>
    );
});

export default AuthFormInput;
