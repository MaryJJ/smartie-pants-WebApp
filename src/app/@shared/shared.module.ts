import { MenuItems } from './menu-items/menu-items';
import { PaginatorComponent } from './paginator/paginator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';
import { AccordionDirective } from './accordion/accordion.directive';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { SpinnerComponent } from '.';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [
    LoaderComponent,
    PaginatorComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
  ],
  exports: [
    LoaderComponent,
    PaginatorComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
  ],
  providers: [MenuItems],
})
export class SharedModule {}
