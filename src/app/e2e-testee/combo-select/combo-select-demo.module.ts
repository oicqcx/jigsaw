/**
 * Created by 10177553 on 2017/4/10.
 */

import {NgModule} from '@angular/core';

import {ComboSelectBasicDemo} from "./basic/app.component";
import {RouterModule} from "@angular/router";

import {ComboSelectMultipleDemo} from "./multiple/app.component";
import {ComboSelectAutoWidthDemo} from "./autoWidth/app.component";
import {ComboSelectLabelFieldDemo} from "./labelField/app.component";
import {ComboSelectWidthDemo} from "./dropdownWidth/app.component";
import {ComboSelectChangeDemo} from "./change/app.component";
import {OpenComboSelectDemo} from "./open/app.component";
import {DisabledComboSelectDemo} from "./disable/app.component";
import {ComboSelectEditableDemo} from "./editable/app.component";
import {CollapseBasicDemo} from "./collapse/app.component";
import {ComboSelectSetWidthDemo} from "./setWidth/app.component";
import {ComboSelectAutoWidthDemoModule} from "./autoWidth/app.module";
import {ComboSelectBasicDemoModule} from "./basic/app.module";
import {ComboSelectChangeDemoModule} from "./change/app.module";
import {CollapseBasicDemoModule} from "./collapse/app.module";
import {DisabledComboSelectDemoModule} from "./disable/app.module";
import {ComboSelectWidthDemoModule} from "./dropdownWidth/app.module";
import {ComboSelectLabelFieldDemoModule} from "./labelField/app.module";
import {ComboSelectMultipleDemoModule} from "./multiple/app.module";
import {OpenComboSelectDemoModule} from "./open/app.module";
import {ComboSelectSetWidthDemoModule} from "./setWidth/app.module";
import {ComboSelectEditableDemoModule} from "./editable/app.module";
import {AutoCompleteDemo} from "./auto-complete/app.component";
import {AutoCompleteDemoModule} from "./auto-complete/app.module";
const routes = [
    {
        path: 'basic', component: ComboSelectBasicDemo
    },
    {
        path: 'multiple', component: ComboSelectMultipleDemo
    },
    {
        path: 'autoWidth', component: ComboSelectAutoWidthDemo
    },
    {
        path: 'labelField', component: ComboSelectLabelFieldDemo
    },
    {
        path: 'dropDownWidth', component: ComboSelectWidthDemo
    },
    {
        path: 'change', component: ComboSelectChangeDemo
    },
    {
        path: 'open', component: OpenComboSelectDemo
    },
    {
        path: 'disable', component: DisabledComboSelectDemo
    },
    {
        path: 'editable', component: ComboSelectEditableDemo
    },
    {
        path : 'collapse', component: CollapseBasicDemo
    },
    {
        path : 'setWidth', component: ComboSelectSetWidthDemo
    },
    {
        path : 'auto-complete', component: AutoCompleteDemo
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ComboSelectAutoWidthDemoModule,
        ComboSelectBasicDemoModule,
        ComboSelectChangeDemoModule,
        CollapseBasicDemoModule,
        DisabledComboSelectDemoModule,
        ComboSelectWidthDemoModule,
        ComboSelectEditableDemoModule,
        ComboSelectLabelFieldDemoModule,
        ComboSelectMultipleDemoModule,
        OpenComboSelectDemoModule,
        ComboSelectSetWidthDemoModule,
        AutoCompleteDemoModule
    ]
})
export class ComboSelectDemoModule {
}
