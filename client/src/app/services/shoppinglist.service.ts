import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class ShoppinglistService {
	public shoppinglists: any = [];
	public _shoppinglists: any = {};
	constructor(private mongo: MongoService, private alert: AlertService) {
		this.shoppinglists = mongo.get('shoppinglist', {}, (arr, obj) => {
			this._shoppinglists = obj;
		});
	}
	create(shoppinglist: any = {}, text = 'shoppinglist has been created.') {
		if (shoppinglist._id) return this.save(shoppinglist);
		this.mongo.create('shoppinglist', shoppinglist, created => {
			this.alert.show({ text });
		});
	}
	doc(shoppinglistId) {
		if (!this._shoppinglists[shoppinglistId]) {
			this._shoppinglists[shoppinglistId] = this.mongo.fetch('shoppinglist', {
				query: {
					_id: shoppinglistId
				}
			});
		}
		return this._shoppinglists[shoppinglistId];
	}
	update(shoppinglist, text = 'shoppinglist has been updated.') {
		this.mongo.afterWhile(shoppinglist, _ => {
			this.save(shoppinglist, text);
		});
	}
	save(shoppinglist, text = 'shoppinglist has been updated.') {
		this.mongo.update('shoppinglist', shoppinglist, _ => {
			if (text) this.alert.show({ text, unique: shoppinglist });
		});
	}
	delete(shoppinglist, text = 'shoppinglist has been deleted.') {
		this.mongo.delete('shoppinglist', shoppinglist, _ => {
			if (text) this.alert.show({ text });
		});
	}
}
