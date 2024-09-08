import { Component } from '@angular/core';
import { ResicendenceModel } from '../../model/residence.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResidenceService } from '../../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-residence',
  templateUrl: './create-residence.component.html',
  styleUrl: './create-residence.component.css'
})
export class CreateResidenceComponent {
  image: File | null = null;
  residence: ResicendenceModel = new ResicendenceModel();
  
  formGroup!: FormGroup;

  constructor(
    private residenceService: ResidenceService,
    private formBuilder: FormBuilder,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    


    this.formGroup = this.formBuilder.group({
      name: [''],
      NIDNo: [''],
      address: [''],
      familyNo: [''],
    
    });


  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

 

  onSubmit() {
    if (this.image) {

      const residence: ResicendenceModel = {
        ...this.formGroup.value
       
      };

      this.residenceService.createResidence(residence, this.image).subscribe({
        next: res => {
          console.log('Residence added successfully', res);
          this.router.navigate(['/viewresidence']);
          console.log('Response:', res);
        },
        error: err => {
          console.error('Error adding residence:', err);
        }
      });
    } else {
      alert('Please select an image.');
    }
  }

}
