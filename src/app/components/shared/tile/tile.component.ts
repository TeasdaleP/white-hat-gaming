import { Component, Input, OnInit } from "@angular/core";
import { Ribbon } from "src/app/helpers/ribbon.enum";
import { Game } from "src/app/ngrx/games";

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() public game!: Game | null;
    public ribbon: string | undefined

    constructor() {}

    ngOnInit(): void {
        if(this.needRibbon()) {
            if(this.game?.categories.includes(Ribbon.Top) && this.game.categories.includes(Ribbon.New)) {
                this.ribbon = `${Ribbon.Top} & ${Ribbon.New}`;
            } else if (this.game?.categories.includes(Ribbon.Top)) {
                this.ribbon = Ribbon.Top;
            } else if (this.game?.categories.includes(Ribbon.New)) {
                this.ribbon = Ribbon.New;
            } 
        }
    }

    public needRibbon(): boolean | undefined {
        return this.game?.categories.includes(Ribbon.Top) || this.game?.categories.includes(Ribbon.New);
    }
}