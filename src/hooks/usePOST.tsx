import { useState, useCallback } from "react";

interface usePOSTHookOptions<TBody, TResp> {
    url: string;
    body: TBody;
}

interface usePOSTHookResult<TBody, TResp> {
    postRequest: (body: TBody) => Promise<void>;
    res: TResp | null;
    isLoading: boolean;
    error: string | null;
}

export function usePOST<TBody, TResp>({url} : usePOSTHookOptions<TBody, TResp>) : usePOSTHookResult<TBody, TResp> {
    const [res, setRes] = useState<TResp | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const postRequest = useCallback(async (body: TBody) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const errResponse = await response.json();
                return Promise.reject(errResponse);
            }

            const res: TResp = await response.json();
            setRes(res);
        } catch(err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return { postRequest, res, isLoading, error }
}