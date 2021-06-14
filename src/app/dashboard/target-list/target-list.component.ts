import { Component, Input, OnInit } from '@angular/core';
import { Target } from '@app/@core';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.scss'],
})
export class TargetListComponent implements OnInit {
  @Input() targets: Target[];
  constructor() {}

  ngOnInit(): void {}
}
