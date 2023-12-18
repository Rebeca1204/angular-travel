import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { data } from '../../data/data';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = '';

  @Input()
  contentTitle: string = '';

  @Input()
  contentDescription: string = '';

  private id: string = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '0';
    });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = data.filter((item) => item.id === id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
