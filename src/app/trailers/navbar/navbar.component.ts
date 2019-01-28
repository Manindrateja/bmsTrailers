import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	isFilterApplied: boolean = false;

	@Input()
	filters: Array<any>;

	@Output()
	filtersChanged = new EventEmitter();

	@Output()
	navbarHeight = new EventEmitter();

 	constructor() { }

	ngOnInit() {
	}

	appliedFilters: any = { 'popular': 'Popular', selected: '' };
	changed(event, btn){

		this.appliedFilters[btn.key] = event.value;

		console.log(this.appliedFilters);

		this.filtersChanged.emit(this.appliedFilters);
	}

	close(index, filter, key){

		this.appliedFilters[key].splice(index,1);
		let btn = this.filters.find( f => f.key === key);
		btn.selected = btn.selected.filter(s => s != filter);

		this.filtersChanged.emit(this.appliedFilters);

	}

}
