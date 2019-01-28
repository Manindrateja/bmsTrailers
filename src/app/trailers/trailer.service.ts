import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

	url = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';
  constructor() { }

  getAll(callback){
  	fetch('./assets/bms.json')
  		.then((res) => res.json())
  		.then((res) => {
  			let o: any = {
  				languages: res[0]
  			};

        let d = Date.now();
			  o.events = Object.entries(res[1]).map(r => r[1]).map( (r: any) => {
          if((new Date(r.ShowDate).getTime() - d) > (24 * 60 * 60 * 1000) * 60){
            let dt = r.ShowDate.split(',');
            r.ShowDate1 = [dt[0].split(' ')[1] , dt[1]];
          }
          else
            r.ShowDate1 = r.ShowDate.split(',')[0].split(' ');

            r.ShowDate = r.ShowDate.split(',');
          return r;
        });

  			let genre: Array<any> = [];
  			o.events.map((r: any) => { 
  				r.EventGenre = r.EventGenre.split('|');
  				return r.EventGenre;
  				// return r.EventGenre.split('|');
  			}).forEach(g => {
  				genre.push(...g);
  			});


  			o.genre = Array.from(new Set(genre));
  			
  			callback(o)
  		})	
  }
}
