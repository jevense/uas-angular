import {Component, OnInit, ViewChild} from '@angular/core';
import {NzFormatEmitEvent, NzTreeComponent} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {
  @ViewChild('treeCom') treeCom: NzTreeComponent;

  form = {
    selectedValue: 'common',
    searchValue: '',
  };
  nodes = [
    {
      title: '科室',
      key: '科室',
      children: [
        {
          title: '口腔预防',
          key: '口腔预防',
          children: [
            {
              title: '口腔预防-0',
              key: '口腔预防-0',
              children: [
                {
                  title: '口腔预防-口腔预防口腔预防-口腔预防',
                  key: '口腔预防-口腔预防',
                  isLeaf: true
                },
                {
                  title: '口腔预防-病理科',
                  key: '口腔预防-病理科',
                  isLeaf: true
                },
                {
                  title: '口腔预防-0-2',
                  key: '口腔预防-0-2',
                  isLeaf: true
                }
              ]
            },
            {
              title: '口腔预防-1',
              key: '口腔预防-1',
              children: [
                {
                  title: '口腔预防-1-0',
                  key: '口腔预防-1-0',
                  isLeaf: true
                },
                {
                  title: '口腔预防-1-1',
                  key: '口腔预防-1-1',
                  isLeaf: true
                },
                {
                  title: '口腔预防-1-2',
                  key: '口腔预防-1-2',
                  isLeaf: true
                }
              ]
            },
            {
              title: '口腔预防-2',
              key: '口腔预防-2',
              isLeaf: true
            }
          ]
        },
        {
          title: '病理科',
          key: '病理科',
          children: [
            {
              title: '病理科-口腔预防',
              key: '病理科-口腔预防',
              isLeaf: true
            },
            {
              title: '病理科-病理科',
              key: '病理科-病理科',
              isLeaf: true
            },
            {
              title: '病理科-0-2',
              key: '病理科-0-2',
              isLeaf: true
            }
          ]
        },
        {
          title: '数学系',
          key: '数学系',
          isLeaf: true
        }
      ]
    }
  ];

  isAllDisplayDataChecked = false;
  isOperating = false;
  listOfDisplayData: Data[] = [];
  listOfAllData: Data[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 15; i++) {
      this.listOfAllData.push({
        id: i,
        name: `口腔科 ${i}`,
        address: `我们不一样`,
      });
    }
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event,
      // tslint:disable-next-line:no-any
      this.treeCom.getMatchedNodeList().map((v: any) => v.title),
      this.treeCom.getExpandedNodeList()
    );
  }

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
  }

  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
    this.refreshStatus();
  }

  operateData(): void {
    this.isOperating = true;
    setTimeout(() => {
      this.listOfAllData.forEach(item => this.mapOfCheckedId[item.id] = false);
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }

  add(): void {
    this.router.navigateByUrl('/main/department-form').catch();
  }
}

export interface Data {
  id: number;
  name: string;
  address: string;
}
