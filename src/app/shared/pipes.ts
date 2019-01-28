import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeUrl'})
export class SafeUrl implements PipeTransform {

	constructor(private sanitizer:DomSanitizer) {}

	transform(url) {
	    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}


@Pipe({name: 'dateTo'})
export class DateTo implements PipeTransform {

	constructor() {}

	transform(value) {
		let date = new Date(value);
	    return date;
	}
}