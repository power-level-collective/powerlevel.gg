import React from "react";
import TeamMemberDetail from "../../../shared/components/TeamMemberDetail.js";
import { team } from "../../../shared/data/team.js";

// Static export doesn't support parameterized routes (e.g. team/[id].tsx), so each team member
// gets a thin page like this one. To add a new member: add them to apps/shared/data/team.ts,
// then copy this file to apps/www/team/<their-id>/index.tsx and swap the `id` below.
const member = team.find((m) => m.id === "terry-teng")!;

export default function Page() {
    return <TeamMemberDetail member={member} />;
}
