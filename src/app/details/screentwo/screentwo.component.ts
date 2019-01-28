import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.css']
})
export class ScreentwoComponent implements OnInit {

  constructor( private modalService: NgbModal) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true});
  }
  ngOnInit() {
  }

}
