import { AppAction } from './app.actions';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

interface AppStateModel {
  items: string[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    items: [],
  },
})
@Injectable()
export class AppState {
  @Action(AppAction)
  add({ getState, setState }: StateContext<AppStateModel>, { payload }: AppAction) {
    const state = getState();
    setState({ items: [...state.items, payload] });
  }
}
