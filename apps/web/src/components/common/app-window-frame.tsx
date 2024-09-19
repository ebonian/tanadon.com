'use client';

import { Maximize2, Minimize2, Minus } from 'lucide-react';
import type { DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { cn } from '@ui/lib/utils';
import { useEffect, useState } from 'react';

interface AppWindowFrameProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    width?: number;
    height?: number;
    handleHeight?: number;
}

export default function AppWindowFrame({
    title,
    children,
    className,
    width = 640,
    height = 480,
    handleHeight = 32,
}: AppWindowFrameProps): JSX.Element {
    const [maximized, setMaximized] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const [position, setPosition] = useState({
        x: window.innerWidth / 2 - width / 2,
        y: window.innerHeight / 2 - height / 2,
    });

    function handleDrag(
        _e: DraggableEvent,
        data: { x: number; y: number }
    ): void {
        setPosition({ x: data.x, y: data.y });
    }

    useEffect(() => {
        setTimeout(() => {
            setTransitioning(false);
        }, 200);
    }, [maximized, minimized]);

    return (
        <Draggable
            bounds='#terminal-boundary'
            disabled={minimized || maximized}
            handle='#handle'
            onDrag={handleDrag}
            position={
                // eslint-disable-next-line no-nested-ternary -- explicit check
                minimized
                    ? {
                          x: window.innerWidth - width - 24,
                          y: window.innerHeight - handleHeight,
                      }
                    : maximized
                      ? { x: 0, y: 0 }
                      : position
            }
        >
            <div
                className={cn(
                    'absolute flex flex-col overflow-hidden bg-[#23262D] text-white',
                    maximized ? 'h-full w-full rounded-none' : 'rounded-sm',
                    minimized ? 'cursor-pointer' : '',
                    transitioning
                        ? 'transition-all duration-200 ease-in-out'
                        : '',
                    className
                )}
                style={{
                    width: maximized ? '100%' : `${width}px`,
                    height: maximized ? '100%' : `${height}px`,
                    boxShadow:
                        '8px 16px 48px 0px rgba(0, 0, 0, 0.24), 4px 8px 32px 0px rgba(0, 0, 0, 0.40)',
                }}
            >
                <div
                    aria-hidden='true'
                    className='flex w-full select-none items-center justify-between bg-[#17181D]'
                    id='handle'
                    onMouseDown={() => {
                        if (minimized) {
                            setMinimized(false);
                            setTransitioning(true);
                        }
                    }}
                    style={{
                        height: handleHeight,
                    }}
                >
                    <div className='flex h-full cursor-default items-center gap-3 pl-4 text-sm'>
                        {title}
                    </div>
                    <div className='flex h-full items-center pr-2'>
                        <button
                            className='group h-full p-1'
                            onClick={() => {
                                if (maximized) {
                                    setMaximized(false);
                                }
                                setMinimized(!minimized);
                                setTransitioning(true);
                            }}
                            type='button'
                        >
                            <div className='grid aspect-square h-full place-content-center rounded-full group-hover:bg-white/10'>
                                <Minus size={16} />
                            </div>
                        </button>
                        {!minimized ? (
                            <button
                                className='group h-full p-1'
                                onClick={() => {
                                    setMaximized(!maximized);
                                    setTransitioning(true);
                                }}
                                type='button'
                            >
                                <div className='grid aspect-square h-full place-content-center rounded-full group-hover:bg-white/10'>
                                    {maximized ? (
                                        <Minimize2 size={16} />
                                    ) : (
                                        <Maximize2 size={16} />
                                    )}
                                </div>
                            </button>
                        ) : null}
                    </div>
                </div>
                {children}
            </div>
        </Draggable>
    );
}
