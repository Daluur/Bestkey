import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AffixWeek } from '../contracts/affixWeek';
import { Character } from '../contracts/character';
import { TileObject } from '../contracts/tileObject';

@Component({
  selector: 'app-all-keys',
  templateUrl: './all-keys.component.html',
  styleUrls: ['./all-keys.component.scss']
})
export class AllKeysComponent implements OnInit {

  public columns: number = 11;

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

  public tiles: TileObject[] = [];

  public week: AffixWeek = 'Tyrannical';
 // public char1: Character;

  constructor(private http: HttpClient) {
    this.columns = this.allDungs.length + 1;
    this.tiles.push(new TileObject('header', false));
    for (let i = 0; i < this.allDungs.length; i++) {
      this.tiles.push(new TileObject(this.allDungs[i], true));
    }
    for (let i = 0; i < 5; i++) {
      this.tiles.push(new TileObject('playerName', true));
      for (let j = 0; j < this.allDungs.length; j++) {
        this.tiles.push(new TileObject((Math.random()*250).toFixed(2).toString(), true));
        
      }
    }
   }

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
