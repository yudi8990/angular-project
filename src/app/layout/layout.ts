import {
  Component, Renderer2, HostListener, OnInit, ChangeDetectorRef
} from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { signal } from '@angular/core';
import { MenuService } from '../shared/menu/menu.service';
import { MenuItem } from '../shared/menu/menuItems';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout implements OnInit {

  // -------------------------------
  // SIDEBAR + THEME (unchanged)
  // -------------------------------
  toggleAside() {
    const body = document.body;
    const icon = document.querySelector('.ki-duotone') as HTMLElement;
    const hasClass = body.classList.contains('aside-enabled');

    if (hasClass) {
      this.renderer.removeClass(body, 'aside-enabled');
      this.updateToggleIcon(icon, false);
    } else {
      this.renderer.addClass(body, 'aside-enabled');
      this.updateToggleIcon(icon, true);
    }
  }

  private updateToggleIcon(icon: HTMLElement | null, on: boolean) {
    if (!icon) return;
    this.renderer.removeClass(icon, on ? 'ki-toggle-off-circle' : 'ki-toggle-on-circle');
    this.renderer.addClass(icon, on ? 'ki-toggle-on-circle' : 'ki-toggle-off-circle');
  }

  @HostListener('window:resize', [])


  onResize() {
    this.applyResponsiveSidebar();
  }

  private applyResponsiveSidebar() {
    if (window.innerWidth <= 1199) {
      document.body.classList.remove('aside-enabled');

      const icon = document.querySelector('.ki-duotone') as HTMLElement;
      this.updateToggleIcon(icon, false);
    }
  }

  onThemeToggle(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    document.body.classList.toggle('dark', checked);
  }

  logOutBtn() {
    document.body.classList.remove('dark')
  }

  // -------------------------------
  // MENU STATE (No slide / No stack)
  // -------------------------------
  rootMenu = signal<MenuItem[]>([]);
  filteredMenu = signal<MenuItem[]>([]);
  searchQuery = signal<string>('');

  expanded = signal<Set<string>>(new Set<string>()); // collapsed by default
  activeItem = signal<MenuItem | null>(null);
  breadcrumbPath = signal<string>('');


  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private menuService: MenuService
  ) {
    // Load full menu
    const root = this.menuService.getCurrentMenu();
    this.rootMenu.set(root);
    this.filteredMenu.set(root);

    // Collapse all menus at start
    this.expanded.set(new Set());

    // React on route changes
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        const path = this.findMenuPath(this.rootMenu(), url);

        // collapse all menus on route change
        this.expanded.set(new Set());

        if (path.length) {
          this.breadcrumbPath.set(path.map(m => m.label).join(' › '));
          this.activeItem.set(path[path.length - 1]);
          document.title = `${path[path.length - 1].label}`;

          // open the correct menu tree only
          this.openPath(path);
        } else {
          this.breadcrumbPath.set('');
        }

        // ✅ NEW: Auto-close sidebar on navigation
        if (window.innerWidth <= 1199) {
          document.body.classList.remove('aside-enabled');
          const icon = document.querySelector('.ki-duotone') as HTMLElement;
          this.updateToggleIcon(icon, false);
        }
      });
  }

  ngOnInit() {
    this.applyResponsiveSidebar();
    // if (this.currentUser) {
    //   console.log('Logged in User:', this.currentUser);
    // }
  }

  // -------------------------------
  // HELPERS
  // -------------------------------
  private getItemKey(item: MenuItem): string {
    return item.route ?? item.label;
  }

  isExpanded(item: MenuItem): boolean {
    return this.expanded().has(this.getItemKey(item));
  }

  toggleSubMenu(item: MenuItem) {
    if (item.children?.length) {
      const key = this.getItemKey(item);
      const next = new Set(this.expanded());

      if (next.has(key)) next.delete(key);
      else next.add(key);

      this.expanded.set(next);
      return;
    }

    this.onMenuClick(item);
  }

  onMenuClick(item: MenuItem) {
    if (item.route) {
      this.activeItem.set(item);
      this.router.navigate([item.route]);
    }
  }

  // -------------------------------
  // FIND MENU PATH FOR OPENING TREE
  // -------------------------------
  findMenuPath(items: MenuItem[], route: string, path: MenuItem[] = []): MenuItem[] {
    for (const item of items) {
      const newPath = [...path, item];

      const normalized = item.route
        ? (item.route.startsWith('/') ? item.route : '/' + item.route)
        : '';

      if (normalized === route) return newPath;

      if (item.children?.length) {
        const childPath = this.findMenuPath(item.children, route, newPath);
        if (childPath.length) return childPath;
      }
    }
    return [];
  }

  private openPath(path: MenuItem[]) {
    const next = new Set<string>();
    path.forEach(p => {
      if (p.children?.length) next.add(this.getItemKey(p));
    });
    this.expanded.set(next);
  }

  // -------------------------------
  // SEARCH LOGIC
  // -------------------------------
  onSearch(query: string) {
    this.searchQuery.set(query.trim());

    if (!query) {
      this.filteredMenu.set(this.rootMenu());
      this.expanded.set(new Set()); // collapse all on clear
      return;
    }

    const filtered = this.filterMenu(this.rootMenu(), query);
    this.filteredMenu.set(filtered);

    const openAll = new Set<string>();
    this.collectParentsToOpen(this.rootMenu(), query.toLowerCase(), [], openAll);
    this.expanded.set(openAll);
  }

  currentMenuDisplay(): MenuItem[] {
    return this.filteredMenu();
  }

  filterMenu(items: MenuItem[], query: string): MenuItem[] {
    if (!query) return items;
    const lower = query.toLowerCase();

    const recurse = (nodes: MenuItem[]): MenuItem[] => {
      const out: MenuItem[] = [];
      for (const n of nodes) {
        const matchSelf = n.label.toLowerCase().includes(lower);
        const matchedChildren = n.children ? recurse(n.children) : [];

        if (matchSelf || matchedChildren.length) {
          out.push({
            ...n,
            children:
              matchedChildren.length
                ? matchedChildren
                : matchSelf && n.children
                  ? n.children
                  : matchedChildren
          });
        }
      }
      return out;
    };

    return recurse(items);
  }

  private collectParentsToOpen(nodes: MenuItem[], q: string, stack: MenuItem[], open: Set<string>) {
    for (const n of nodes) {
      const newStack = [...stack, n];
      const matchSelf = n.label.toLowerCase().includes(q);
      let childMatched = false;

      if (n.children?.length) {
        const before = open.size;
        this.collectParentsToOpen(n.children, q, newStack, open);
        childMatched = open.size !== before;
      }

      if ((matchSelf || childMatched) && n.children?.length) {
        open.add(this.getItemKey(n));
      }
    }
  }

  highlightMatch(label: string): string {
    const q = this.searchQuery();
    if (!q) return label;
    const regex = new RegExp(`(${q})`, 'gi');
    return label.replace(regex, '<span class="highlight">$1</span>');
  }
}
