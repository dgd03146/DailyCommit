{
  /**
   * Union Types: OR 모든 가능한 케이스 중에 발생할 수 있는 딱 하나를 다룰 수 있는 타입을 만들고 싶을때 사용
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉body
  // fail -> 😂 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
