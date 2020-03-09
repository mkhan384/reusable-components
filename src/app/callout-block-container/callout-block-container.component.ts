import { Component } from '@angular/core';
import { getLinkIcon, getLinkLabel, trackByFn } from '../../shared/ui';

@Component({
  selector: 'jb-callout-block-container',
  templateUrl: './callout-block-container.component.html',
})
export class CalloutBlockContainerComponent {
  calloutBlock;
  getLinkIcon = getLinkIcon;
  getLinkLabel = getLinkLabel;
  trackByFn = trackByFn;
}

export const calloutBlockContainerResolver = (registry, data) => {
  if (!!data.calloutBlock && !!data.calloutBlock.length) {
    data.calloutBlock.map(obj => {
      if (!obj.image || (!!obj.image && !obj.image[0].src)) {
        data.calloutBlock.map(block => {
          delete block.image;
        });
      }
      if (!obj.icon || (!!obj.icon && !obj.icon[0].src)) {
        data.calloutBlock.map(block => {
          delete block.icon;
        });
      }
      if (!obj.link || (!!obj.link && !obj.link[0].title)) {
        data.calloutBlock.map(block => {
          delete block.link;
        });
      }
    });
    return {
      calloutBlock: data.calloutBlock,
    };
  }
};
