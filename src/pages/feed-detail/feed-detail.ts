import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-detail',
  templateUrl: 'feed-detail.html',
})
export class FeedDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) { }

  movie = {}
  id_movie = this.navParams.get("id")

  getMovie(id) {
    this.movieProvider.getbyId(id)
      .subscribe(data => {
        this.movie = data
      }, error => {
        console.log(error)
      })
  }

  ionViewDidLoad() {
    this.getMovie(this.id_movie)
  }

}
