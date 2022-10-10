// Project Type
enum ProjectStatus {
  // 옵션이 두가지 정확하게 있고 식별자만 필요하다.
  Active,
  Finished
}

class Project {
  constructor(
    // 초기화 약식
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// Project State Management
type Listener = (items: Project[]) => void; // 즉 리스너 함수가 반환하는 값은 신경쓰지 않는다.

class ProjectState {
  // 무언가 변경될대마다 함수 목록이 호출되어야한다.
  private listeners: Listener[] = []; // 함수 참조 배열 새로운 프로젝트를 추가할 때 변화가 있을때마다, 모든 리스너를 소환하는 개념. 리스너 배열에 여러개의 함수를 저장한다.
  private projects: Project[] = [];
  private static instance: ProjectState;

  // 싱글톤 생성자. 프로젝트에 하나의 상태관리 객체만 갖게 하기 위해서
  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance; // single instance 반환
  }

  addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    // TODO: 잘 모르겠음
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// 이 전역 상수가 어디에서든지 사용될 수 있다. 정확하게 동일한 객체로 항상 작업 가능하다. 전체 앱에서 한가지 유형의 객체만 갖게한다.
const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}

// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // 원래 정의했던 메서드 저장
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      // 함수에 접근할 때 실행
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

// ProjectList Class
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    this.templateElement = document.getElementById(
      'project-list'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    this.assignedProjects = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: Project[]) => {
      this.assignedProjects = projects;
      this.renderProjects();
    });

    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = prjItem.title;
      listEl?.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    // input값들 튜플로 반환, trim 사용, if문으로 input값이 비어있는지 체크 invalid하면 void 반환
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true
    };

    const descritpionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1
    };

    if (
      !validate(titleValidatable) ||
      !validate(descritpionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();

    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }

  // listener
  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
