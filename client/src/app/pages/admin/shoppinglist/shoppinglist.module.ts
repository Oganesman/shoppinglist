import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ShoppinglistComponent } from './shoppinglist.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ShoppinglistComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ShoppinglistComponent
	],
	providers: []
	
})

export class ShoppinglistModule { }
