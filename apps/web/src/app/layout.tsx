import './globals.css';
import '@repo/ui/styles.css';
import { cn } from '@ui/lib/utils';
import type { Metadata } from 'next';
import { caskaydiaMono } from '~/lib/fonts';
import { IsClientCtxProvider } from '~/providers/is-client-ctx-provider';
import { ThemeProvider } from '~/providers/theme-provider';

export const metadata: Metadata = {
    title: 'Create Turborepo',
    description: 'Generated by create turbo',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang='en'>
            <body className={cn(caskaydiaMono.variable, 'dark')}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    disableTransitionOnChange
                    enableSystem
                >
                    <IsClientCtxProvider>{children}</IsClientCtxProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
