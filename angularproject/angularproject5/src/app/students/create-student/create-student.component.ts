import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationserviceService } from '../../location/locationservice.service';
import { Location } from '../../location/location.model';
import { StudentModel } from '../student.model';
import { error } from 'console';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit{


  locations:Location[]=[];
  students:StudentModel[]=[];
  studentsForm!:FormGroup;
  student:StudentModel=new StudentModel();


constructor(private studentService:StudentService,
  private locationServices:LocationserviceService,
  private formBuilder:FormBuilder,
  private router:Router
){}




  ngOnInit(): void {
    this.loadLocation();

    this.studentsForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.formBuilder.group({
        id: [undefined],
        name: [undefined,],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })

      
    });

    this.studentsForm.get('location')?.get('name')?.valueChanges
    .subscribe(name=>{
      const selectedLocation=this.locations.find(loc=>loc.name===name);

      if(selectedLocation){
        this.studentsForm.patchValue({location:selectedLocation});
      }

    });


  }

loadLocation(){
this.locationServices.getAllLocationforStudent()
.subscribe({
next:res=>{

  this.locations=res;
  

},
error:error=>{

  console.log(error);
}

})

  



}

createStudents(){
this.student.name=this.studentsForm.value.name;
this.student.email=this.studentsForm.value.email;
this.student.cellNo=this.studentsForm.value.cellNo;
this.student.location=this.studentsForm.value.location;

this.studentService.createStudents(this.student)
.subscribe({

  next:res=>{

    this.loadLocation();
    this.studentsForm.reset();
    this.router.navigate(['students']);
  },
  error:error=>{

    console.log(error);
  }

});

}


}
