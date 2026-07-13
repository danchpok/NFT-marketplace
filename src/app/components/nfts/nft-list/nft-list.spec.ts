import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftList } from './nft-list';

describe('NftList', () => {
  let component: NftList;
  let fixture: ComponentFixture<NftList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftList],
    }).compileComponents();

    fixture = TestBed.createComponent(NftList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
