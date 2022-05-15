import { Affix } from "./affix";

export interface MythicPlusInfo {
    short_name: string;
    mythic_level: number;
    score: number;
    affixes: Affix[];
}