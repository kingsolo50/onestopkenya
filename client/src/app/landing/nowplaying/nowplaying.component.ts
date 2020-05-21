import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {

  sound: any;

  constructor() {} 

  ngOnInit() {
    
    
    
  }
  
  playSound() {
    var sound = new Howl({
      src: 'http://nebula.shoutca.st:2199/start/kingsolo50',
      format: ['mp3', 'aac', 'ogg']
    });
    sound.play();
    console.log('Play button clicked..')
  }

  
 
}
