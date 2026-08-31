import React from "react";
import MonogramAvatar from "./MonogramAvatar.js";
import StatBar from "./StatBar.js";
import type { TeamMember } from "../data/team.js";

export default function TeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="panel-cut flex h-full flex-col gap-5 p-6">
            <div className="flex items-start gap-4">
                <div className="w-20 shrink-0">
                    <MonogramAvatar name={member.name} />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <h3 className="truncate text-lg font-bold text-ink">{member.name}</h3>
                            <p className="text-sm text-ink-muted">{member.title}</p>
                        </div>
                        <span className="badge-level shrink-0 text-xs">
                            LVL <span className="text-sm">{member.level}</span>
                        </span>
                    </div>
                    <span className="chip mt-2">{member.classTag}</span>
                </div>
            </div>

            <p className="text-sm leading-relaxed text-ink-muted">{member.bio}</p>

            <div className="flex flex-col gap-2 border-t border-border pt-4">
                {member.stats.map((stat) => (
                    <StatBar key={stat.label} label={stat.label} value={stat.value} />
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                    <span key={skill} className="chip">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
