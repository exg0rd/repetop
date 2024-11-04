import { Button } from "@/ui/button";
import { Spinner } from "./Spinner";
import React, { ReactNode, useState } from "react";


interface Props { 
    className?: string;
    children?: React.ReactNode;
    loading: any;
    onClick: () => void;
    form: string;
    onSubmit: () => void;
}

export const SubmitButton: React.FC<Props> = ({ className, children, loading, onClick, onSubmit, form }) => {

    const handleClick = () => {
        onSubmit()
        onClick();
    }

    return (
        <Button
            disabled={loading === true}
            type="submit"
            variant={"default"}
            className={className}
            onClick={handleClick}
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