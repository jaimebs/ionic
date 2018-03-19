import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';


@Injectable()
export class UtilProvider {

    constructor(private loadingCtrl: LoadingController) { }

    loading() {
        return this.loadingCtrl.create({
            content: "Loading...",
        });
    }

}
