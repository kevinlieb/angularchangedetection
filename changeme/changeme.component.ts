import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeme',
  templateUrl: './changeme.component.html',
  styleUrls: ['./changeme.component.css']
})
export class ChangemeComponent implements OnInit {

  public originalText = "Text to Change";
  @Input() theText;
  @Input() public counter: number = 1;

  constructor() { 
  	this.counter = 1;
  	
  }

  ngOnInit() {
  	setInterval(this.theCallback.bind(this), 2000);
  	
  }

  theCallback() {
  	console.log("In the callback of the timer and counter is " + this.counter + " and theText is " + this.theText);
  	this.counter = this.counter + 1;
  	this.theText = this.originalText + ": " + this.counter;

  }

}
