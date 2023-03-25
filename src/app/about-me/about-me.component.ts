import { Component, OnInit } from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  liczba: number = 0;
  licznik: number = 0;
  napis: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
