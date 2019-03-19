import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductRecommendComponent } from './product-recommend.component';

describe('ProductRecommendComponent', () => {
  let component: ProductRecommendComponent;
  let fixture: ComponentFixture<ProductRecommendComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRecommendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
