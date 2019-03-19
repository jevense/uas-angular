import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent {
  info: {
    name: string,
    departmentId: string,
    mark: string
  } = {
    name: '',
    departmentId: '',
    mark: '',
  };

  validateForm: FormGroup;

  nzOptions = options;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  onChanges(values: any): void {
    console.log(values, this.info.departmentId);
  }

  submitForm($event: any, value: any) {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }


  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  confirmValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }
}


const options = [
  {
    value: 'fuchanke',
    label: '科室',
    children: [
      {
        value: 'fuchanke',
        label: '妇产科',
        children: [
          {
            value: 'jichen',
            label: '急症妇产科',
            isLeaf: true
          },
          {
            value: 'Ningbo',
            label: '生殖中心',
            isLeaf: true
          }
        ]
      },
      {
        value: 'jiangsu',
        label: '骨伤科',
        children: [
          {
            value: 'nanjing',
            label: '骨伤一',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'fuchanke',
    label: '护理部',
    children: [
      {
        value: 'fuchanke',
        label: '护理一部',
        children: [
          {
            value: 'jichen',
            label: '护理室',
            children: [{
              value: 'Ningbo',
              label: '护理站',
              isLeaf: true
            }]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: '护理二部',
        children: [
          {
            value: 'jichen',
            label: '护理室',
            children: [{
              value: 'Ningbo',
              label: '护理站',
              isLeaf: true
            }]
          }
        ]
      }
    ]
  }
];
