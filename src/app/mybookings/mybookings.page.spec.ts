import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MybookingsPage } from './mybookings.page';

describe('MybookingsPage', () => {
  let component: MybookingsPage;
  let fixture: ComponentFixture<MybookingsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MybookingsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MybookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
