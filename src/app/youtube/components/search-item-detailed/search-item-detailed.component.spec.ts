import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemDetailedComponent } from './search-item-detailed.component';

describe('SearchItemDetailedComponent', () => {
  let component: SearchItemDetailedComponent;
  let fixture: ComponentFixture<SearchItemDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
