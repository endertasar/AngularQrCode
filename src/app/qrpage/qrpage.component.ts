import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.component.html',
  styleUrls: ['./qrpage.component.css']
})
export class QRPageComponent implements OnInit {

  constructor() { }
  title = 'ngx-qrcode-demo';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.LOW;
  value = 'http://card.tasar.com.tr/?cardId=RPUPHFIPFH';

  ngOnInit(): void {
  }

}
