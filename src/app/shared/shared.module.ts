import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        SidebarComponent,
    ], 
    exports: [
        SidebarComponent
    ], 
    imports: [
        RouterModule
    ]
})
export class SharedModule {

}