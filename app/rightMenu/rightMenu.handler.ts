import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs/BehaviorSubject"

@Injectable()
export class RightMenuHandler {
    private _RightMenuVisible = new BehaviorSubject(false)

    public GetRightMenuVisible(): BehaviorSubject<boolean> {
        return this._RightMenuVisible
    }

    public IsRightMenuVisible(): boolean {
        return this._RightMenuVisible.getValue()
    }

    public ToggleRightMenuVisibleValue(): boolean {
        this._RightMenuVisible.next(!this._RightMenuVisible.getValue())
        return this._RightMenuVisible.getValue()
    }

    public SetRightMenuVisibleValue(newValue: boolean): void {
        this._RightMenuVisible.next(newValue)
    }
}
