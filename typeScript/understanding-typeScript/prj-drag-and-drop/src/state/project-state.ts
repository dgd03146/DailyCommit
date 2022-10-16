import { Project, ProjectStatus } from '../models/project.js';

// Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
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
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
// 여러개의 파일에서 import 되고 있는데 총 몇번 실행이 될까???
// 다른 어떤 파일에 의해 파일이 처음으로 import 되었을때 1회 실행됨
// 다른 파일이 그 같은 파일을 다시 임포트하는 경우 다시 실행되지 않는다.

// ES 모듈과 namespace 중 ES 모듈 방법을 권장한다. 타입 안전을 확보할 수 있고, 모든 파일이 무엇을 필요로 하는지 분명히 명시하기 때문
// namespace는 임포트 했던 하나의 파일이 삭제되면, 다른 파일이 알림 없이 중단되는 점입니다. 적어도 코드 실행 이 전에는 알림 없습니다.
// 네임스페이스는 비교적 작은 프로젝트, 그 외의 경우에는, ES 모듈을 사용!!!
