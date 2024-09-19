'use client';

import GradientBackground from '~/components/common/gradient-background';
import TerminalWindow from '~/components/terminal/window';
import { useIsClient } from '~/providers/is-client-ctx-provider';

export default function Page(): JSX.Element {
    const isClient = useIsClient();

    return (
        <GradientBackground>
            <div
                className='relative h-screen w-full overflow-hidden'
                id='terminal-boundary'
            >
                {isClient ? <TerminalWindow /> : null}
            </div>
        </GradientBackground>
    );
}
