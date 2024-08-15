import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Beneficiary } from 'src/app/interface/beneficiary';
import { BeneficiaryService } from 'src/app/service/beneficiary.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css'],
})
export class BeneficiaryComponent {
  closeResult = '';
  beneficiaries: Beneficiary[] = [];
  beneficiaryData: Beneficiary = {} as Beneficiary;

  constructor(
    private modalService: NgbModal,
    private beneficiaryService: BeneficiaryService
  ) {}

  ngOnInit(): void {
    this.onGetBeneficiaries();
  }

  onGetBeneficiaries() {
    this.beneficiaryService.getBeneficiaries().subscribe(
      (res) => {
        this.beneficiaries = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onGetBeneficiary(id: number) {
    this.beneficiaryService.getBeneficiary(id).subscribe(
      (res) => {
        this.beneficiaryData = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  openBeneficiaryAddModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openEditModal(content: any, id: number) {
    if (typeof id === 'number') {
      this.onGetBeneficiary(id);
    }

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onAddBeneficiary(form: NgForm) {
    if (form.valid) {
      this.beneficiaryService.addBeneficiary(form.value).subscribe(
        (res) => {
          this.onGetBeneficiaries();
          console.log(res);
        },
        (err: any) => console.log(err),
        () => console.log('complete')
      );
    }
  }

  onDeleteBeneficiary(id: number) {
    this.beneficiaryService.deleteBeneficiary(id).subscribe(
      (res) => {
        console.log(res);
        this.onGetBeneficiaries();
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onUpdateBeneficiary(id: number, form: NgForm) {
    if (form.valid) {
      this.beneficiaryService.updateBeneficiary(id, form.value).subscribe(
        (res) => {
          this.onGetBeneficiaries();
          console.log(res);
        },
        (err: any) => console.log(err),
        () => console.log('complete')
      );
    }
  }
}
