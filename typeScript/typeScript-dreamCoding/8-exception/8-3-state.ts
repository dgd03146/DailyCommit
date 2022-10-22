{
  type NetworkErrorState = {
    result: 'fail';

    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  // Union State 사용

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'down'
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      const returnData = this.userService.login();

      if (returnData.result === 'success') {
        console.log('로그인 성공');
      } else {
        if (returnData.result === 'fail') {
          console.log(`로그인 실패 : ${returnData.reason}`);
        } else {
          console.error('네트워크 오류가 아닌 다른 오류입니다...');
        }
      }

      // try {

      // } catch (error) {

      //   // show dialog to use

      // }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
