export { expect } from "@playwright/test";

class SignUpPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByLabel("First name");
    this.lastNameField = page.getByLabel("Last name");
    this.emailField = page.getByLabel("Email address");
    this.passwordField = page.getByLabel("Password");
    this.signUpBtn = page.getByRole("button", { name: "Sign up" });
  }

  async fillFirstNameField() {
    await this.firstNameField.fill("Jul");
  }
  async fillLastNameField() {
    await this.lastNameField.fill("Bob");
  }
  async fillEmailField() {
    await this.emailField.fill("jullbob@gmail.com");
  }
  async fillPasswordField() {
    await this.passwordField.fill("password1234");
  }
  async clickOnSignUpBtn() {
    await this.signUpBtn.click();
  }
}
export default SignUpPage;
