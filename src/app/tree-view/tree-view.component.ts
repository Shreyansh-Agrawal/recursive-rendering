import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  standalone: false,
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {
  @Input() tree: Record<string, string[]> = {};
  @Input() root: string = '';

  getChildren(node: string): string[] {
    return this.tree[node] || [0];
  }

  hasChildren(node: string): boolean {
    const children = this.tree[node];
    return Array.isArray(children) && children.length > 0;
  }

}
