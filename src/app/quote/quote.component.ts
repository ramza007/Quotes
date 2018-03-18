import { Component, OnInit,} from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Learning never exhausts the mind. By Leornardo Da Vinchi','By Leonardo da Vinci'),
    new Quote(2, 'There is no charm equal to tenderness of heart. By Jane Austen', 'By Jane Austen'),
    new Quote(3, 'All that we see or seem is but a dream within a dream. By Edgar Allan Poe', 'By Edgar Allan Poe'),
    new Quote(4, 'It is far better to be alone, than to be in bad company. By George Washington', 'By George Washington'),
    new Quote(5, 'Happiness can only exist in acceptance. By George Orwell', 'By George Orwell'),
    new Quote(6, 'Love has no age, no limit; and no death. By John Galsworthy', 'By John Galsworthy'),
    new Quote(7, "You can't blame gravity for falling in love. By Albert Einstein",'By Albert Einstein'),
    new Quote(8, 'Honesty is the first chapter in the book of wisdom. By Thomas Jefferson', 'By Thomas Jefferson'),
    new Quote(9, 'The journey of a thousand miles begins with one step. By Lau Tzu','By Lau Tzu'),
    new Quote(10, "Words may show a man's wit but actions his meaning. By Benjamin Franklin",'By Benjamin Franklin'),
    new Quote(11, "Look before you leap. By Ramza Reseni", 'original By Leonardo Da Vinchi')
  ]


  constructor() {  }
  ngOnInit() {
}
}
