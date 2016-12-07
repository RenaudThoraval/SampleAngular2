import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpModule } from "@angular/http"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"
import { HeaderComponent } from "./header/header.component"
import { RightMenuComponent } from "./rightMenu/rightMenu.component"
import { RightMenuHandler } from "./rightMenu/rightMenu.handler"

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        RightMenuComponent
    ],
    providers: [
        RightMenuHandler
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
