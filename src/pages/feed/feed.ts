import { FeedDetailPage } from './../feed-detail/feed-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  movie = {}
  refresher: any;

  getMovies() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',
      dismissOnPageChange: true
    });
    loading.present()
    this.movieProvider.get()
      .subscribe(data => {
        loading.dismiss()
        this.movie = data
        if(this.refresher) 
          this.refresher.complete();
      }, error => {
        loading.dismiss()
        if (this.refresher)
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
