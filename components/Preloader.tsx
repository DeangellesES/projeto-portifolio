"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [hidden, setHidden] = useState(false);
    const timers = useRef<number[]>([]);

    const finish = useCallback(() => {
        setLeaving(true);
        timers.current.push(window.setTimeout(() => setHidden(true), 600));
    }, []);

    useEffect(() => {
        const timeouts = timers.current;
        timeouts.push(window.setTimeout(() => setProgress(12), 80));

        const interval = window.setInterval(() => {
            setProgress(prev => {
                const next = prev + (Math.random() * 7 + 2);

                if (next >= 100) {
                    window.clearInterval(interval);
                    timeouts.push(window.setTimeout(finish, 450));
                    return 100;
                }

                return Math.min(next, 100);
            });
        }, 150);

        return () => {
            window.clearInterval(interval);
            timeouts.forEach(t => window.clearTimeout(t));
        };
    }, [finish]);

    if (hidden) return null;

    return (
        <div
            aria-hidden
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#0d0d0d]
                        transition-opacity duration-500 ${leaving ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
            <h1 className="text-3xl sm:text-4xl text-white tracking-widest">
                Felipe{" "}
                <span className="text-[#a1a1a1]">Deangelles</span>
            </h1>

            <div className="w-64 sm:w-80">
                <div className="flex justify-between text-xs text-[#a1a1a1] mb-2">
                    <span>Carregando</span>
                    <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-1 w-full border border-gray-300/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-white transition-[width] duration-150 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}