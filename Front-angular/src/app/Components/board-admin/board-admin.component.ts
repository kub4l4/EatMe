import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html'
})
export class BoardAdminComponent implements OnInit {
  name = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
