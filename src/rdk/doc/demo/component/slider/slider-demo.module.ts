/**
 * Created by 10177553 on 2017/4/13.
 */
import { NgModule } from '@angular/core';

import {RdkSliderDemoBasic} from "./basic/basic";
import {RouterModule} from "@angular/router";
import {RdkSliderModule} from "../../../../component/slider/index";

const routes = [
    {
        path: 'basic', component:RdkSliderDemoBasic
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        RdkSliderModule
    ],
    exports: [RdkSliderDemoBasic],
    declarations: [RdkSliderDemoBasic],
    providers: [],
})
export class SliderDemoModule { }
