import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDetail } from './nft-detail';

describe('NftDetail', () => {
  let component: NftDetail;
  let fixture: ComponentFixture<NftDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(NftDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
