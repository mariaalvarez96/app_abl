import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MysuppliesPage } from './mysupplies.page';

describe('MysuppliesPage', () => {
  let component: MysuppliesPage;
  let fixture: ComponentFixture<MysuppliesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MysuppliesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MysuppliesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
