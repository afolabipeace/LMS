import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResourcesComponent } from './get-resources.component';

describe('GetResourcesComponent', () => {
  let component: GetResourcesComponent;
  let fixture: ComponentFixture<GetResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
