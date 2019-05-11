export class Observable<T> {
    // ... still no implementation ...
}

declare global {
    interface Array<T> {
        toObservable(): Observable<T>;
    }
}

// tslint:disable-next-line:only-arrow-functions
Array.prototype.toObservable = function() {
    return new Observable();
};

declare global {
    interface Window { GL: any; }
}
