// Drag & Drop Interfaces
namespace App {
  // 동일한 네임스페이스에 집어넣어야한다.
  // 문제는 인터페이스들은 해당 네임스페이스 내부에서만 이용가능하다.
  // export 키워드를 추가하여 네임스페이스에서 기능을 export한다.
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
