import { UtilProvider } from './../../providers/util';
import { FeedDetailPage } from './../feed-detail/feed-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private utilProvider: UtilProvider,
    private modalCtrl: ModalController
  ) { }

  movie = {}
  refresher: any;
  loading = this.utilProvider.loading()

  getMovies() {
    if(!this.refresher)
      this.loading.present()
    this.movieProvider.get()
      .subscribe(data => {
        this.loading.dismiss()
        if(this.refresher)
          this.refresher.complete();
        this.movie = data
      }, error => {
        this.loading.dismiss()
        if(this.refresher)
          this.refresher.complete();
        console.log(error)
      })
  }

  goToFeedDetail(id_movie) {
    let feedDetailModal = this.modalCtrl.create(FeedDetailPage, { id: id_movie });
    feedDetailModal.present();
  }

  doRefresh(refresher) {
    this.refresher = refresher
    this.getMovies()
  }

  ionViewDidLoad() {
    this.getMovies();
  }

}
