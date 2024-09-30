import { Component, OnInit } from '@angular/core';
import { BranchModule } from '../../module/branch/branch.module';
import { BranchService } from '../../service/branch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrl: './update-branch.component.css'
})
export class UpdateBranchComponent implements OnInit{

  id: number=0;
  branch: BranchModule = new BranchModule();

  constructor(private branchService: BranchService,
    private router: Router,
    private route: ActivatedRoute
  ) { }






  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.branchService.getById(this.id)
      .subscribe({

        next: res => {
          this.branch = res;
          console.log(this.branch );
          console.log(res);
        },
        error: error => {
          console.log(error);
        }

      });
  }

  updateBranch() {

    this.branchService.updateBranches(this.id, this.branch)

      .subscribe({
        next: res => {
         console.log(res);
         
          this.router.navigate(['/viewbranch']);
        },
        error: error => {
          console.log(error);
        }

      });
  }
  



}

