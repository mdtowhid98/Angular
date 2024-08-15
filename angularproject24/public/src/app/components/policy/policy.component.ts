import { Component } from '@angular/core';
import { Policy } from 'src/app/interface/policy';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent {
  policies: Policy[] = [];
  policyData: Policy = {} as Policy;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.onGetPolicies();
  }

  onGetPolicies() {
    this.policyService.getPolicies().subscribe(
      (res) => {
        this.policies = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onGetPolicy(id: number) {
    this.policyService.getPolicy(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}
