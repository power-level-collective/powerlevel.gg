import React from "react";

export interface StatBarProps {
    label: string;
    /** Bar fill percentage, 0-100. */
    value: number;
    /** Text shown at the end of the bar; defaults to the (clamped) value itself. */
    display?: string;
}

export default function StatBar({ label, value, display }: StatBarProps) {
    const clamped = Math.max(0, Math.min(100, value));
    return (
        <div className="stat-row">
            <span className="text-[0.7rem] font-bold uppercase tracking-wide text-ink-muted">{label}</span>
            <span className="stat-track">
                <span className="stat-fill" style={{ "--fill": `${clamped}%` } as React.CSSProperties} />
            </span>
            <span className="text-right font-display text-xs font-bold text-gold">{display ?? clamped}</span>
        </div>
    );
}
