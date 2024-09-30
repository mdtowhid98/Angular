import { Component, OnInit } from '@angular/core';
import { BranchModule } from '../../module/branch/branch.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BranchService } from '../../service/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrl: './create-branch.component.css'
})
export class CreateBranchComponent implements OnInit{

  branch: BranchModule = new BranchModule();

  formValue!: FormGroup;
  branchData: any;

  constructor(private branchService: BranchService,
    private router: Router,
   
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      branchName: [''],
      location: [''],
      

    });

  }


  createBranch() {

    this.branch.branchName = this.formValue.value.branchName;
    this.branch.location = this.formValue.value.location;
    


    this.branchService.createBranch(this.branch)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewbranch']);
        },
        error: error => {

          console.log(error);
        }

      });



  }
}

