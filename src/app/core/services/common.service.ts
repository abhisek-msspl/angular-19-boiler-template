import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
export interface IUnsaveFormCheck {
  checkChanges: boolean;
  valueModified: boolean;
  submitForm: boolean;
}

@Injectable({ providedIn: 'root' })
export class CommonService {
  public aclBroadcastChannel: BroadcastChannel = new BroadcastChannel('aclChannel');

  /* Error interceptor properties */
  public isRefreshingToken = false;
  public tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  /* token info backup for reuse token */
  private _tokenInfoSubject = new BehaviorSubject<string | null>(null);
  public tokenInfoSource$ = this._tokenInfoSubject.asObservable();

  public saveTokenInfo(type: string | null) {
    this._tokenInfoSubject.next(type);
  }
}
