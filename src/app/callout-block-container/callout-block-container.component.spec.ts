import {
  CalloutBlockContainerComponent,
  calloutBlockContainerResolver,
} from './callout-block-container.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  JbCalloutBlockModule,
  JbImageModule,
  JbLinkModule,
} from 'jb-component-library';
import { CommonModule } from '@angular/common';
import { UIModule } from '../../shared/ui';

describe('CalloutBlockContainerComponent', () => {
  let component: CalloutBlockContainerComponent;
  let fixture: ComponentFixture<CalloutBlockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalloutBlockContainerComponent],
      imports: [
        CommonModule,
        UIModule,
        JbImageModule,
        JbCalloutBlockModule,
        JbLinkModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutBlockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve correctly', () => {
    const actual = {
      type: 'callout',
      calloutBlock: [
        {
          link: [
            {
              title: 'title',
            },
          ],
          icon: [
            {
              title: 'title',
            },
          ],
          image: [
            {
              title: 'title',
            },
          ],
        },
      ],
    };

    const expected = {
      calloutBlock: [
        {
          link: [
            {
              title: 'title',
            },
          ],
        },
      ],
    };

    const testData = calloutBlockContainerResolver({} as any, actual);
    expect(testData).toEqual(expected);
  });
});
