import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';

import { ModeAccesCreateAdminComponent } from './mode-acces/create/mode-acces-create-admin.component';
import { ModeAccesEditAdminComponent } from './mode-acces/edit/mode-acces-edit-admin.component';
import { ModeAccesViewAdminComponent } from './mode-acces/view/mode-acces-view-admin.component';
import { ModeAccesListAdminComponent } from './mode-acces/list/mode-acces-list-admin.component';
import { SiteImageCreateAdminComponent } from './site-image/create/site-image-create-admin.component';
import { SiteImageEditAdminComponent } from './site-image/edit/site-image-edit-admin.component';
import { SiteImageViewAdminComponent } from './site-image/view/site-image-view-admin.component';
import { SiteImageListAdminComponent } from './site-image/list/site-image-list-admin.component';
import { SiteCreateAdminComponent } from './site/create/site-create-admin.component';
import { SiteEditAdminComponent } from './site/edit/site-edit-admin.component';
import { SiteViewAdminComponent } from './site/view/site-view-admin.component';
import { SiteListAdminComponent } from './site/list/site-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    ModeAccesCreateAdminComponent,
    ModeAccesListAdminComponent,
    ModeAccesViewAdminComponent,
    ModeAccesEditAdminComponent,
    SiteImageCreateAdminComponent,
    SiteImageListAdminComponent,
    SiteImageViewAdminComponent,
    SiteImageEditAdminComponent,
    SiteCreateAdminComponent,
    SiteListAdminComponent,
    SiteViewAdminComponent,
    SiteEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,

  ],
  exports: [
  ModeAccesCreateAdminComponent,
  ModeAccesListAdminComponent,
  ModeAccesViewAdminComponent,
  ModeAccesEditAdminComponent,
  SiteImageCreateAdminComponent,
  SiteImageListAdminComponent,
  SiteImageViewAdminComponent,
  SiteImageEditAdminComponent,
  SiteCreateAdminComponent,
  SiteListAdminComponent,
  SiteViewAdminComponent,
  SiteEditAdminComponent,
  ],
  entryComponents: [],
})
export class SiteAdminModule { }
