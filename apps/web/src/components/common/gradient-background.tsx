import { cn } from '@ui/lib/utils';
import Image from 'next/image';

interface GradientBackgroundProps {
    children: React.ReactNode;
    className?: string;
}

export default function GradientBackground({
    children,
    className,
}: GradientBackgroundProps): JSX.Element {
    return (
        <div className={cn('', className)}>
            {children}
            <div className='fixed bottom-0 left-0 right-0 top-0 -z-10 select-none'>
                <div className='absolute h-full w-full bg-white/5 backdrop-blur-[480px]' />
                <div className='absolute h-full w-full bg-white/5 backdrop-blur-[480px]' />
                <div className='relative -z-10 h-full w-full'>
                    <Image
                        alt='Gradient background'
                        className='object-cover object-center'
                        fill
                        src='/assets/colors_background.svg'
                    />
                </div>
            </div>
        </div>
    );
}
