/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

// 해당 파일이 필요한 것들을 필요할 때 이용할 수 있도록 해야한다.

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
