import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  status = [
    {index: 0, text: '关闭', value: false, type: 'default', checked: false},
    {
      index: 1,
      text: '运行中',
      value: false,
      type: 'processing',
      checked: false,
    },
    {index: 2, text: '已上线', value: false, type: 'success', checked: false},
    {index: 3, text: '异常', value: false, type: 'error', checked: false},
  ];
  loading = false;
  description = '';
  expandForm = false;
  isAllDisplayDataChecked = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  listOfData = [];

  value: string[] = [ '0-0-0' ];
  nodes = [ {
    title   : 'Node1',
    value   : '0-0',
    key     : '0-0',
    children: [ {
      title : 'Child Node1',
      value : '0-0-0',
      key   : '0-0-0',
      isLeaf: true
    } ]
  }, {
    title   : 'Node2',
    value   : '0-1',
    key     : '0-1',
    children: [ {
      title : 'Child Node3',
      value : '0-1-0',
      key   : '0-1-0',
      isLeaf: true
    }, {
      title : 'Child Node4',
      value : '0-1-1',
      key   : '0-1-1',
      isLeaf: true
    }, {
      title : 'Child Node5',
      value : '0-1-2',
      key   : '0-1-2',
      isLeaf: true
    } ]
  } ];

  onChange($event: string[]): void {
    console.log($event);
  }

  constructor(private fb: FormBuilder,
              private modalSrv: NzModalService,
  ) {
    for (let i = 0; i < 20; i++) {
      this.listOfData.push({
        id: 1,
        account: '15110080976',
        phone: `1511008097${i}`,
        name: `宇文化及${i}`,
        department: '放射肿瘤科',
        duty: '老师',
        idType: '责任导师',
        subject: '放射肿瘤科',
        year: '2019',
        role: '管理员',
        rstRole: '管理员',
        examRole: '管理员',
        auditRole: '管理员',
        status: '正常'
      });
    }
  }

  ngOnInit(): void {
  }

  getData() {
    return;
  }

  reset() {
    setTimeout(() => this.getData());
  }

  checkAll(value: boolean): void {
    this.listOfData.forEach(item => this.mapOfCheckedId[item.id] = value);
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfData.every(item => this.mapOfCheckedId[item.id]);
    this.numberOfChecked = this.listOfData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  add(tpl: TemplateRef<{}>) {
    this.modalSrv.create({
      nzTitle: '新建规则',
      nzContent: tpl,
      nzOnOk: () => {
        this.loading = true;
        // this.http
        //   .post('/rule', { description: this.description })
        //   .subscribe(() => this.getData());
      },
    });
  }
}
