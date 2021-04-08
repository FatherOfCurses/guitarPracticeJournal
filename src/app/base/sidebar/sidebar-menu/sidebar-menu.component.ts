import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Practice',
    },
    {
      title: 'Songs',
    },
    {
      title: 'Practice Diary'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
