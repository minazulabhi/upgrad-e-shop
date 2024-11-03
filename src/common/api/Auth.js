export class Auth {
  apiHandler;

  constructor(apiHandler) {
    this.apiHandler = apiHandler;
  }

  async login(body) {
    return await this.apiHandler.post("/auth/signin", body);
  }

  async signUp(body) {
    return await this.apiHandler.post("/auth/signup", body);
  }
}
