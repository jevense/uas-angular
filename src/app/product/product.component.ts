import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private router: Router) {
  }

  recommend() {
    this.router.navigateByUrl('/main/product-recommend').catch();
  }
}
