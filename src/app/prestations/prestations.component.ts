import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  //moduleId: module.id,
  selector:    'prestations',
  templateUrl: 'prestations.component.html'
})

export class PrestationsComponent {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  prestationsData = require("./prestationsData.json");
  essaiReceptionSrc = require('../../static/essai_reception_1.png');
  confinementGazSrc = require('../../static/confinement-gaz.png');
  mesureFrontaleSrc = require('../../static/mesure_frontale.png');

  enSavoirPlusClick = function(event, prestation, controlId) {

    let popintHtml = this.buildPopinDetail(prestation, controlId),
      popinTitle = this.buildPopinTitle(prestation, controlId);

    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title(popinTitle)
      .body(popintHtml)
      .open();
  };

  buildPopinDetail = function(prestation, controlId) {
    return require('./detailPrestation/' + prestation.controls[controlId].code + '.html');
  };

  buildPopinTitle = function(prestation, controlId) {
    return prestation.name + ' - ' + prestation.controls[controlId].type;
  }

}
