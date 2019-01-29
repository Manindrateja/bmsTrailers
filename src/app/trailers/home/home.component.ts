import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { TrailerService } from '../trailer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	filters: Array<any> = [{ name: 'Popular', key: 'popular', items: ['Popular', 'Fresh'], multiple: false}];
	events: Array<any>;
	allevents: Array<any>;

	rightMostElement: number;

	@ViewChild('container') container: ElementRef;
	@ViewChild('bigEvent') bigEvent: ElementRef;

	@HostListener('window:resize', ['$event'])
	onResize(event) {

	  let width = this.container.nativeElement.offsetWidth - 120;
	  this.rightMostElement = Math.floor(width / 260 );

	  if(this.activeEvent){
	  	let index = this.events.findIndex( e => e.EventCode === this.activeEvent.EventCode && !e.bigEvent);
	  	this.eventSelected(this.activeEvent, index ,true);
	  }
	}

	constructor(private trailerService: TrailerService) { }

	ngOnInit() {
		
		this.trailerService.getAll(r => {
			// console.log(r);
			if(r) {
				this.filters.push({ name: 'Language', key: 'language', multiple: true, items: r.languages, selected: []});
				this.filters.push({ name: 'Genre', key: 'genre', multiple: true, items: r.genre, selected: []});
				this.allevents = r.events;
				this.events = this.allevents;
			}
		});

		let width = this.container.nativeElement.offsetWidth - 120;
		this.rightMostElement = Math.floor(width / 260);

	}

	appliedFilter: any;
	onfilter(e : any){
		this.removeSelected();

		this.events = this.allevents.filter(event => {

			if('language' in e && e.language.length){
				if(!e.language.includes(event.EventLanguage)) return false;
			}

			if('genre' in e && e.genre.length){
				if(!event.EventGenre.some(eg => e.genre.some(g => g == eg)))
					return false
			}
			return true;
		});
	}

	activeEvent: any;
	activeEventIndex:number;
	eventSelected(e : any, i :number, onresize: boolean){

		if(e.bigEvent && !onresize)
			return;

		if(!onresize){
			this.activeEvent = Object.assign({}, e);
			this.activeEvent.bigEvent = true;
			this.activeEvent.TrailerURL = 'https://www.youtube.com/embed/' + this.activeEvent.TrailerURL.split('v=')[1].split('&')[0] + '?autoplay=1';	
		}

		this.activeEventIndex = Math.floor(i/ this.rightMostElement) * this.rightMostElement;
		
		// console.log(i, this.activeEventIndex, this.rightMostElement);
		
		setTimeout(() => {
			this.container.nativeElement.scrollTop = this.bigEvent.nativeElement.offsetTop;
		}, 300);
	}

	removeSelected(){
		this.activeEvent = null;
		this.activeEventIndex = undefined;
	}

}
