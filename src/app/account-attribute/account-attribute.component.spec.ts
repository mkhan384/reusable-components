import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAttributeComponent } from './account-attribute.component';
import { MockDomSanitizier } from '../../../core/mocks/angular/dom-sanitizer.mock';
import { AccountAttributes } from '../../../shared/types';

describe('AccountAttributeComponent', () => {
  let component: AccountAttributeComponent;
  let sanitizer: MockDomSanitizier;
  const attributeInfo: AccountAttributes = {
    name: 'Profile photo',
    description: {
      imageInDescription: new Blob(),
      showImage: true,
    },
  };
  beforeEach(() => {
    component = new AccountAttributeComponent(
      (sanitizer = new MockDomSanitizier() as any),
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create profile picture from attributeInfo', () => {
    URL.createObjectURL = jest.fn(() => 'details');
    component.attributeInfo = attributeInfo;
    component.ngOnChanges();
    expect(sanitizer.bypassSecurityTrustUrl).toHaveBeenCalled();
  });
});
