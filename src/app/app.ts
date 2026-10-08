import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal , DestroyRef} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet , Event } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{
  protected readonly title = signal('social');
  private _router= inject(Router);
  private _PLATFORM_ID = inject(PLATFORM_ID);
  private _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    if (!isPlatformBrowser(this._PLATFORM_ID)) return;
   initFlowbite()
  this._router.events
  .pipe(filter((e:Event): e is NavigationEnd => e instanceof NavigationEnd),
takeUntilDestroyed(this._destroyRef))
  .subscribe(()=>{
    setTimeout(() => initFlowbite(), 0)
  })

  }
}
