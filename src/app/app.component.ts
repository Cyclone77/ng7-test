import { Component, OnInit } from '@angular/core';
import 'reflect-metadata';

// 导入额外框架
import 'src/assets/js/lib/gl.ui.gexcel.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng7-test';

  ngOnInit() {
    // 原型上添加对象 可以调试
    console.log(window.GL.GExcel());
    [].toObservable();


    // const _c = new C();
    // tslint:disable-next-line:variable-name
    this.loadData();
  }

  loadData(msg: string = 'cyclone77') {
    // tslint:disable-next-line:variable-name
    const _controller = new Controller();
    _controller.getContent('cyclone77');
    console.log(_controller);
  }
}

const Router = Symbol(); // 唯一key,用来存装饰器的信息

function GET(path?: string) { // GET带了个可选参数
  return (target: any, name: string) => setMethodDecorator(target, name, 'GET', path);
}

// 把method和path存起来，路由查找的时候就可以用了
function setMethodDecorator(target: any, name: string, method: string, path?: string) {
  target[Router] = target[Router] || {};
  target[Router][name] = target[Router][name] || {};
  target[Router][name].method = method;
  target[Router][name].path = path;
}

// 通过PropertyDescriptor来设置enumerable
// tslint:disable-next-line:no-shadowed-variable
function Enumerable(enumerable: boolean) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = enumerable;
  };
}

class Controller {

  @GET('/index')
  @Enumerable(true)
  getContent(arg: string): string {
    return '';
  }
}
