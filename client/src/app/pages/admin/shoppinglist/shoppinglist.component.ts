import { Component } from '@angular/core';
import { ShoppinglistService } from 'src/app/services';
import { ModalService } from 'wacom';
@Component({
	selector: 'shoppinglist',
	templateUrl: './shoppinglist.component.html',
	styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent {
	// public task = { name: '', id: 0 };
	// public tasks: any = [];

	// addList() {
	// 	if (this.task.id == 0) {
	// 		this.tasks.push({ id: (new Date()).getTime(), name: this.task.name, stike: false })
	// 	}
	// 	this.task = {
	// 		name: '',
	// 		id: 0
	// 	}
	// }

	// delete(item) {
	// 	for (let i = 0; i < this.tasks.length; i++) {
	// 		if (item.id == this.tasks[i].id) {
	// 			this.tasks.splice(i, 1)
	// 		}
	// 	}
	// }

	// edit(item) {
	// 	this.task = item
	// }

	// onStrike(item) {
	// 	for (let i = 0; i < this.tasks.length; i++) {
	// 		if (item.id == this.tasks[i].id) {
	// 			if (this.tasks[i].strike) {
	// 				this.tasks[i].strike = false
	// 			} else {
	// 				this.tasks[i].strike = true
	// 			}
	// 		}
	// 	}
	// }

	constructor(
		public ss: ShoppinglistService,
		public modal: ModalService
	) { }
}
