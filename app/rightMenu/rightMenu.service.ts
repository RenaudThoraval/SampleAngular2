import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { ICity } from "../interfaces/interfaces"
import { Observable } from "rxjs/Observable"

@Injectable()
export class RightMenuService {
    private static API_URL: string =
    "http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&cluster=yes&appid=ece43b82b8aacdc35318a692f0cb6a92"

    constructor(private _http: Http) { }

    public GetCities(): Observable<ResponseError | ResponseSuccess> {
        return this._http.get(RightMenuService.API_URL)
            .map((response) => {
                let result = response.json()
                return new ResponseSuccess(
                    result.list
                        .map((val: any) => {
                            return <ICity>{
                                name: val.name,
                                temperature: val.main.temp
                            }
                        })
                )
            }).catch((error, source) => {
                return Observable.of(new ResponseError(error))
            })
    }
}

class ResponseError {
    public tag: "error" = "error"
    public error: any

    constructor(error: any) {
        this.error = error
    }
}

class ResponseSuccess {
    public tag: "success" = "success"
    public cities: ICity[]

    constructor(cities: ICity[]) {
        this.cities = cities
    }
}
