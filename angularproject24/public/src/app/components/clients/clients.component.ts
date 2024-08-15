import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/interface/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  closeResult = '';
  clients: Client[] = [];
  clientData: Client = {} as Client;

  constructor(
    private clientsService: ClientService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.onGetClients();
  }

  onGetClients() {
    this.clientsService.getClients().subscribe(
      (res) => {
        this.clients = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
  onGetClient(id: number) {
    this.clientsService.getClient(id).subscribe(
      (res) => {
        this.clientData = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onAddClient(form: NgForm) {
    console.log('Form: ', form.value);
    if (form.valid) {
      this.clientsService.addClient(form.value).subscribe(
        (res) => {
          this.onGetClients();
          console.log(res);
        },
        (err: any) => console.log(err),
        () => console.log('complete')
      );
    }
  }

  openClientAddModal(content: any) {
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

  onUpdateClient(clientId: number, form: NgForm) {
    if (form.valid) {
      this.clientsService.updateClient(clientId, form.value).subscribe(
        (res) => {
          this.onGetClients();
          console.log(res);
        },
        (err: any) => console.log(err),
        () => console.log('complete')
      );
    }
  }

  openEditModal(content: any, id: number) {
    if (typeof id === 'number') {
      this.onGetClient(id);
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

  onDeleteClient(id: number) {
    this.clientsService.deleteClient(id).subscribe(
      (res) => {
        this.onGetClients();
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}
