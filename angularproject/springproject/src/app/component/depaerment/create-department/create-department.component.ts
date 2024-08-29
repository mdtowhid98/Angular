import { Component } from '@angular/core';
import { facultyModel } from '../../../model/facultyModel';
import { departmentModel } from '../../../model/departmentModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacultyService } from '../../../service/faculty.service';
import { DepartmentService } from '../../../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.css'
})
export class CreateDepartmentComponent {

  faculties: facultyModel[] = [];
  departments: departmentModel[] = [];
  depaertmentForm!: FormGroup;
  depaertment: departmentModel = new departmentModel();

  constructor(private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadFaculty();

    this.depaertmentForm = this.formBuilder.group({

      name: [''],
     
      faculty: this.formBuilder.group({

        id: [undefined],
        name: [undefined],
        totalSeat: [undefined],
       

      })


    });

    this.depaertmentForm.get('faculty')?.get('name')?.valueChanges
      .subscribe(name => {

        const selectedFaculty = this.faculties.find(loc => loc.name === name);

        if (selectedFaculty) {
          this.depaertmentForm.patchValue({ location: selectedFaculty });

        }

      });


  }

  loadFaculty() {
    this.facultyService.getFacultyForDepartment()
      .subscribe({
        next: res => {
          this.faculties = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }



  createDepartment() {

    this.depaertment.name = this.depaertmentForm.value.name;
    this.depaertment.faculty = this.depaertmentForm.value.faculty;
    

    this.departmentService.createDepartment(this.depaertment)
      .subscribe({

        next: res => {
          this.loadFaculty();
          this.depaertmentForm.reset();
          this.router.navigate(['viewDepartment']);
        },
        error: error => {
          console.log(error);
        }

      });
  }

}
