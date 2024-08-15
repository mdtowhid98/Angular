# Getting Started with Angular

- ng generate component components/header (creates a new component in the components folder)
- ng add @ng-bootstrap/ng-bootstrap
- ng add @angular/material
- ng add @fortawesome/angular-fontawesome
  -ng g service services/data (creates a new service in the services folder)
  -ng g interface interfaces/Post (creates a new interface in the interfaces folder)
- ng g environment environments/environment (creates a new environment file in the environments folder)

```html
<input
  id="dateOfBirth"
  class="form-control"
  placeholder="yyyy-mm-dd"
  name="dp"
  ngbDatepicker
  #dp="ngbDatepicker"
/>
<button
  class="btn btn-outline-secondary bi bi-calendar3"
  (click)="dp.toggle()"
  type="button"
></button>
```
