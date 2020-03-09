import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trackByFn } from '../../../shared/ui';
@Component({
  selector: 'jb-account-attribute',
  templateUrl: './account-attribute.component.html',
  styleUrls: ['./account-attribute.component.scss'],
})
export class AccountAttributeComponent implements OnChanges {
  @Input() attributeInfo?: AccountAttributes;
  @Input() expandedAttribute?: string;
  @Output() expanded = new EventEmitter<boolean>();
  @Output() dialogEmitter = new EventEmitter<any>();

  profilePicture: any;
  trackByFn = trackByFn;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.attributeInfo && this.attributeInfo.description.showImage) {
      const objectURL = URL.createObjectURL(
        this.attributeInfo.description.descriptionContent,
      );
      this.profilePicture = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }

  expandAttribute() {
    this.expanded.emit(true);
  }

  openDialog(event) {
    this.dialogEmitter.emit({
      isOpen: true,
      target: event.target,
    });
  }
}
