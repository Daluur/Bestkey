import { MythicPlusInfo } from "./mythicPlusInfo";

export interface Character {
    name: string;
    thumbnail_url: string;
    mythic_plus_best_runs: MythicPlusInfo[];
    mythic_plus_alternate_runs: MythicPlusInfo[];
}