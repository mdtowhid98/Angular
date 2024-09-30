import { Component, OnInit } from '@angular/core';
import { BranchModule } from '../../module/branch/branch.module';
import { BranchService } from '../../service/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrl: './view-branch.component.css'
})
export class ViewBranchComponent implements OnInit{

  branches: BranchModule[] = [];

  constructor(
    private branchService: BranchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBranches();
  }

  // Helper method to load the generics
  loadBranches() {
    this.branchService.getAllBranch().subscribe({
      next: (data: BranchModule[]) => {
        this.branches = data;
      },
      error: (error) => {
        console.log('Error fetching branches', error);
      }
    });
  }

  // Delete method
  deleteBranch(id: number) {
    if (confirm('Are you sure you want to delete this branch?')) {
      this.branchService.deleteBranch(id).subscribe({
        next: () => {
          // Refresh the generics list after successful deletion
          this.loadBranches();
        },
        error: (error) => {
          console.log('Error deleting generic', error);
        }
      });
    }
  }

  updateBranch(id: number) {

    this.router.navigate(['/updatebranch', id]);
  }


}
