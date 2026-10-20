import { Component, inject, OnInit, signal } from '@angular/core';

import { ProfileService } from '../../../core/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  private _ProfileService = inject(ProfileService)
  profile=this._ProfileService.profile;

  ngOnInit(): void {
    this._ProfileService.GetMyProfile().subscribe({
      error:(err)=>{
        console.log('Profile request failed:', err);

      }
    })
  }

}
