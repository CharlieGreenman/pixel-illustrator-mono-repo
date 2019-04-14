import { async, TestBed } from '@angular/core/testing';
import { PixelAngstCommonUiModule } from './pixel-angst-common-ui.module';

describe('PixelAngstCommonUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PixelAngstCommonUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PixelAngstCommonUiModule).toBeDefined();
  });
});
