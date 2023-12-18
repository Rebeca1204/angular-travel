import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardTitle: string = '';

  @Input()
  photoCover: string = '';

  @Input()
  cardId: string = '0';

  ngOnInit(): void {}
}
