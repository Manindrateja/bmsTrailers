import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

	@Input()
	value;

	@Input()
	items;

	@Input()
	label;

	constructor() { }

	ngOnInit() {
		console.log(this);
	}

	checked(item){
		item.checked = !item.checked;
	}

}
