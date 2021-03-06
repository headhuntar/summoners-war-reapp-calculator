import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  dateObj: Date = new Date();
  runeTypes: Array<string> = RuneTypes;

  constructor() { }

  ngOnInit() {
  }

}

const RuneTypes = [
  'Energy',
  'Guard',
  'Swift',
  'Blade',
  'Rage',
  'Focus',
  'Endure',
  'Fatal',
  'Despair',
  'Vampire',
  'Violent',
  'Nemesis',
  'Will',
  'Shield',
  'Revenge',
  'Destroy',
  'Fight',
  'Determination',
  'Enhance',
  'Accuracy',
  'Tolerance'
]