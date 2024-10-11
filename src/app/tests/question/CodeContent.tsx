import React, { useEffect } from "react";
import hljs from "highlight.js";

interface Props {
    code: string;
}

export const CodeContent: React.FC<Props> = ({ code }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div className="flex flex-col font-mono text-pretty whitespace-pre">
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
};
