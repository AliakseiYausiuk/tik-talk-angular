import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {ImgUrlPipe, SvgComponent} from "@tt/common-ui";
import {ProfileService} from "@tt/profile";


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgComponent,
    NgFor,
    SubscriberCardComponent,
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    ImgUrlPipe,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.me;

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
