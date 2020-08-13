import { Component, OnInit, Input } from '@angular/core';
import { Square } from '../models/index';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() square: Square;

  constructor() {}

  ngOnInit(): void {}
}
