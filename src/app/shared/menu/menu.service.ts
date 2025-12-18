import { Injectable, signal } from '@angular/core';
import { MenuItem } from './menuItems';
import { MENU } from './menu.data';
@Injectable({ providedIn: 'root' })
export class MenuService {
  currentMenu = signal<MenuItem[]>(MENU);
  private stack = signal<MenuItem[][]>([]);
  getCurrentMenu() {
    return this.currentMenu();
  }
  getStack() {
    return this.stack();
  }
  openSubMenu(item: MenuItem) {
    if (item.children?.length) {
      this.stack.update((s) => {
        s.push(this.currentMenu());
        return s;
      });
      this.currentMenu.set(item.children);
    }
  }
  goBack() {
    this.stack.update((s) => {
      if (s.length > 0) this.currentMenu.set(s.pop()!);
      return s;
    });
  }
}
