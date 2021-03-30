import { ChangeDetectionStrategy, Component } from '@angular/core';
import { configure, makeAutoObservable }      from 'mobx';

configure({observableRequiresReaction: true});

@Component({
			   selector       : 'app-root',
			   template       : `
                   <h2>Open the console to see the warning</h2>
                   <div *mobxAutorun>
                       counter 1 (autorun): {{counter1}}
                       <button (click)="increment1()">+</button>
                   </div>
                   <div *mobxReaction="getCounter2.bind(this)">
                       counter 2 (reaction): {{counter2}}
                       <button (click)="increment2()">+</button>
                   </div>
			   `,
			   changeDetection: ChangeDetectionStrategy.OnPush,
			   styles         : []
		   })
export class AppComponent {

	counter1 = 0;
	counter2 = 0;

	constructor() {
		makeAutoObservable(this);
	}

	getCounter2() {
		return this.counter2;
	}

	increment1() {
		this.counter1++;
	}

	increment2() {
		this.counter2++;
	}
}
