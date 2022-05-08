import { Component } from '@angular/core';
import { ShoppinglistService } from 'src/app/services';
@Component({
	selector: 'shoppinglist',
	templateUrl: './shoppinglist.component.html',
	styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent {
	public close;
	public shoppinglist: any = {};
	constructor(public ss: ShoppinglistService) { }
}
