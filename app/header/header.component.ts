import { RightMenuHandler } from "./../rightMenu/rightMenu.handler"
import { Component } from "@angular/core"

@Component({
    selector: "header",
    moduleId: module.id,
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})
export class HeaderComponent {
    constructor(private _RightMenuHandler: RightMenuHandler) { }

    public ToggleRightMenuVisibility(): void {
        this._RightMenuHandler.ToggleRightMenuVisibleValue()
    }
 }
