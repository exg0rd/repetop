import { Button } from "@/ui/button";
import { Spinner } from "./Spinner";
import React from "react";


interface Props { 
    className?: string;
    children?: React.ReactNode;
    loading: any;
    form: string;
    onClick?: () => void;
}

export const SubmitButton: React.FC<Props> = ({ className, children, loading, form, onClick }) => {
    return (
        <Button
            disabled={loading}
            type="submit"
            variant={"default"}
            className="bg-blue-700 text-sm"
            onClick={onClick}
            form={form}>
              {loading ? (
                <>
                    <Spinner />
                </>
            ) : (
                children
            )}
        </Button>
    );
}