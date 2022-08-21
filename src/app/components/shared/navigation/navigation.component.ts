import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IdName } from "src/app/helpers/navigation";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @Input() public navigation: Array<IdName> | undefined;
    @Input() public selected!: IdName | null;

    @Output() public selection: EventEmitter<IdName> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    public handleSelection(selection: IdName) {
        if(selection.id !== this.selected?.id) {
            this.selection.emit(selection);
        }
    }
}