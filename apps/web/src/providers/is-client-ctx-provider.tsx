'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const IsClientCtx = createContext(false);

interface IsClientCtxProviderProps {
    children: React.ReactNode;
}

export function IsClientCtxProvider({
    children,
}: IsClientCtxProviderProps): JSX.Element {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
    );
}

export function useIsClient(): boolean {
    return useContext(IsClientCtx);
}
