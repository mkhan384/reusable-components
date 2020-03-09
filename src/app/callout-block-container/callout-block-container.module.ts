import { CalloutBlockContainerComponent } from './callout-block-container.component';
import {
  JbCalloutBlockModule,
  JbImageModule,
  JbLinkModule,
} from 'jb-component-library';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UIModule } from '../../shared/ui';

const MODULES = [
  CommonModule,
  UIModule,
  JbImageModule,
  JbCalloutBlockModule,
  JbLinkModule,
];

const DECLARATIONS = [CalloutBlockContainerComponent];

@NgModule({
  imports: [...MODULES],
  declarations: [...DECLARATIONS],
  exports: [...MODULES, ...DECLARATIONS],
  entryComponents: [...DECLARATIONS],
})
export class JbCalloutBlockContainerModule {
  static entry = CalloutBlockContainerComponent;
}
