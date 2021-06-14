import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants, Logger, Placement } from '@app/@core';
import { Observable, throwError } from 'rxjs';

const log = new Logger('Placement service');

@Injectable({
  providedIn: 'root',
})
export class PlacementService {
  constructor(private http: HttpClient) {}

  createPlacements(parameters: any): Observable<Placement[]> {
    return this.http
      .post<Placement[]>(Constants.PLACEMENT_URL, parameters)
      .pipe(catchError(this.handleError));
  }

  updatePlacements(parameters: any): Observable<Placement[]> {
    return this.http
      .put<Placement[]>(Constants.PLACEMENT_URL, parameters)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    log.debug(error);
    let errorMessage = '';
    if (error.error?.detail === undefined) {
      errorMessage = Constants.ERROR;
    } else {
      errorMessage = error.error.detail;
    }
    return throwError(errorMessage);
  }
}
