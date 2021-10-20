import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";

@Component(
    {
        selector:'pm-star',
        templateUrl: './star.component.html',
        styleUrls:['./star.component.css']
    }
)
export class StarComponent implements OnChanges
{
    cropWidth: number = 75;
    @Input() rating: number=0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void
    {
        this.cropWidth = this.rating*75/5;
        console.log("On changes star");
    }
    ngOnInit(): void
    {
        this.cropWidth = this.rating*75/5;
        console.log("On init star");
    }
    onClick(): void
    {
        this.ratingClicked.emit(` with ${this.rating} rating was clicked!`)
    }

}