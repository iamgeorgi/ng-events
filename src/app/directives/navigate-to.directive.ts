import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
@Directive({
    selector: '[navigateTo]'
})
export class HighlightDirective {
    constructor(private eleRef: ElementRef, 
                private renderer: Renderer2, 
                private router: Router,
                private eventService: EventService) {
    }

    @Input() routePath!: string;

    numberOfClicks = 0;

    @HostListener('click', ['$event.target'])
    onClick(target: any) {
        this.router.navigate([this.routePath])
    }
}