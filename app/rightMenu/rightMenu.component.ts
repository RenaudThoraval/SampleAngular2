import { RightMenuHandler } from "./rightMenu.handler"
import { ICity } from "./../interfaces/interfaces"
import { Component } from "@angular/core"
import { RightMenuService } from "./rightMenu.service"

@Component({
    selector: "rightMenu",
    moduleId: module.id,
    templateUrl: "rightMenu.component.html",
    styleUrls: ["rightMenu.component.css"],
    providers: [RightMenuService]
})
export class RightMenuComponent {

    private cities: ICity[]

    private isVisible: boolean

    constructor(
        private _rightMenuService: RightMenuService,
        private _RightMenuHandler: RightMenuHandler) {

        this._RightMenuHandler.GetRightMenuVisible()
            .subscribe((newValue) => {
                this.isVisible = newValue
            })
    }

    public ToggleVisibility(): void {
        this._RightMenuHandler.ToggleRightMenuVisibleValue()
    }

    public ngOnInit(): void {
        this._rightMenuService.GetCities()
            .subscribe((response) => {
                if (response.tag === "success") {
                    this.cities = response.cities
                } else {
                    console.error(response.error)
                }
            })
    }
}
