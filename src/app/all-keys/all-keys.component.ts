import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AffixWeek } from '../contracts/affixWeek';
import { Character } from '../contracts/character';

@Component({
  selector: 'app-all-keys',
  templateUrl: './all-keys.component.html',
  styleUrls: ['./all-keys.component.scss']
})
export class AllKeysComponent implements OnInit {

  public allDungs: string[] = [
    'TOP',
    'SOA',
    'STRT',
    'HOA',
    'GMBT',
    'PF',
    'NW',
    'DOS',
    'MISTS',
    'SD',
  ]

  public week: AffixWeek = 'Tyrannical';
 // public char1: Character;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.loadData();
  }

  private async loadData(): Promise<void> {
    const req = this.http.get<Character>('https://raider.io/api/v1/characters/profile?region=eu&realm=draenor&name=daluur&fields=mythic_plus_alternate_runs,mythic_plus_best_runs');
    console.log(req);
    req.subscribe((r) => this.gotData(r));
  }

  private gotData(char: Character){
    console.log(char.mythic_plus_alternate_runs[0].affixes[0]);
    console.log(char.mythic_plus_best_runs[1].affixes[1]);
  }
}
