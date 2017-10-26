import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { StorageModel } from './models/storage.model';
import * as PostActions from './actions/post.action';

interface AppState {
  message: string;
}

interface App2State {
  post: StorageModel;
}

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message$: Observable<string>;
  post: Observable<StorageModel>;
  text: string; // form input val
  title = 'app';

  constructor(
    private store: Store<AppState>,
    private store2: Store<App2State>
  ) {
    this.message$ = this.store.select('message');
    this.post = this.store2.select('post');
  }

  spanisMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

  editText() {
    this.store2.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store2.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store2.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store2.dispatch(new PostActions.Downvote());
  }

}
