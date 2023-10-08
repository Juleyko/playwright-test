export { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.notAMemberLink = page.getByRole("link", { name: "Not a member?" });
    this.emailLogInField = page.getByLabel("Email");
    this.passwordLogInField = page.getByLabel("Password");
    this.logInBtn = page.getByRole("button", { name: "Log in" });
  }

  async ckickOnNotAMemberLink() {
    await this.notAMemberLink.click();
  }
  async fillEmailLogInField() {
    await this.emailLogInField.fill("jullbob@gmail.com");
  }
  async fillPasswordLogInField() {
    await this.passwordLogInField.fill("password1234");
  }
  async clickOnLogInBtn() {
    await this.logInBtn.click();
  }
  async logInUser() {
    await this.page.goto("https://www.motionelements.com/login");
    await this.fillEmailLogInField();
    await this.fillPasswordLogInField();
    await this.clickOnLogInBtn();
    await this.page.waitForURL("**/account/dashboard", {
      waitUntil: "domcontentloaded",
    });
  }
}
export default LoginPage;
