import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  isMobileMenuOpen = false;

  ngOnInit() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const navmenu = document.querySelector('#navmenu');
      const toggle = document.getElementById('mobile-menu-toggle');
      
      if (this.isMobileMenuOpen && 
          !navmenu?.contains(target) && 
          !toggle?.contains(target)) {
        this.toggleMobileMenu();
      }
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('#navmenu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
          this.isMobileMenuOpen = false;
          this.updateMobileMenuClass();
        }
      });
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateMobileMenuClass();
  }

  private updateMobileMenuClass() {
    const navmenu = document.querySelector('#navmenu');
    if (navmenu) {
      if (this.isMobileMenuOpen) {
        navmenu.classList.add('nav-open');
      } else {
        navmenu.classList.remove('nav-open');
      }
    }
  }
}
