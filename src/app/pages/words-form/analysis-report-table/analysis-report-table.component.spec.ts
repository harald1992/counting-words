import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReportTableComponent } from './analysis-report-table.component';

describe('AnalysisReportTableComponent', () => {
  let component: AnalysisReportTableComponent;
  let fixture: ComponentFixture<AnalysisReportTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReportTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
