import { Button } from "@/ui/button";
import { Spinner } from "./Spinner";
import React, { ReactNode, useState } from "react";


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
            className={className}
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