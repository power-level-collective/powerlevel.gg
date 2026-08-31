import React from "react";
import { CloudIcon, ShieldIcon, SwordIcon, WrenchIcon } from "../icons/Icons.js";
import type { ServiceOffering } from "../data/services.js";

const ICONS = {
    shield: ShieldIcon,
    sword: SwordIcon,
    wrench: WrenchIcon,
    cloud: CloudIcon,
};

export default function ServiceCard({ service }: { service: ServiceOffering }) {
    const Icon = ICONS[service.icon];
    return (
        <div className="panel-cut flex h-full flex-col gap-5 p-7">
            <div className="flex items-center justify-between">
                <div className="panel-cut-sm flex h-12 w-12 items-center justify-center bg-surface-2 text-gold">
                    <Icon width={26} height={26} />
                </div>
                <span className="chip">{service.classTag}</span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.blurb}</p>
            </div>
            <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                        {bullet}
                    </li>
                ))}
                {service.link && (
                    <li className="pt-1">
                        <a
                            href={service.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
                        >
                            {service.link.label} ↗
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
}
