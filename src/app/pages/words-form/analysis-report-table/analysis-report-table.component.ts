import { Component, Input, OnInit } from "@angular/core";
import { WordFrequency } from "src/app/counting-words/lib/counting-words";

@Component({
  selector: "app-analysis-report-table",
  templateUrl: "./analysis-report-table.component.html",
  styleUrls: ["./analysis-report-table.component.scss"],
})
export class AnalysisReportTableComponent implements OnInit {
  @Input() list: WordFrequency[] = [];

  constructor() {}

  ngOnInit(): void {}
}
