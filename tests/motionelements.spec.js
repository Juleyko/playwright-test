import { test, expect } from "@playwright/test";
import HomePage from "./pages/home.page";
import SearchResultPage from "./pages/searchResult.page.js";
import LoginPage from "./pages/login.page.js";
import SignUpPage from "./pages/signUp.page.js";

test("[case 1] Check home page main elements", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openUrl();
  await homePage.isPageLoaded();
  await homePage.isSearchBarVisible();
  await homePage.isCategoriesVisible();
  await homePage.isLocalizationBtnVisible();
  await homePage.isLoginBtnVisible();
  await homePage.scrollToFooter();
  await homePage.isFacebookIconVisible();
  await homePage.isYoutubeIconVisible();
});

test("[case 2] Registration of new user ", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openUrl();
  await homePage.ckickOnLoginBtn();
  const loginPage = new LoginPage(page);
  await loginPage.ckickOnNotAMemberLink();
  const signUpPage = new SignUpPage(page);
  await signUpPage.fillFirstNameField();
  await signUpPage.fillLastNameField();
  await signUpPage.fillEmailField();
  await signUpPage.fillPasswordField();
  await signUpPage.clickOnSignUpBtn();
});

test("[case 3] Check search result", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openUrl();
  await homePage.fillSearchField();
  await homePage.ckickOnSearchBtn();
  const searchResultPage = new SearchResultPage(page);
  await searchResultPage.isSearchResultTextVisible();
});

test("[case 4] login", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openUrl();
  await homePage.ckickOnLoginBtn();
  const loginPage = new LoginPage(page);
  await loginPage.fillEmailLogInField();
  await loginPage.fillPasswordLogInField();
  await loginPage.clickOnLogInBtn();
});

test("[case 5] Download free video element", async ({ page }) => {
  const searchResultPage = new SearchResultPage(page);
  const loginPage = new LoginPage(page);
  await loginPage.logInUser();
  await searchResultPage.openUrl();
  await searchResultPage.scrollToPrice();
  await searchResultPage.clickOnPriceBtn();
  await searchResultPage.clickOnCheckboxFree();
  await searchResultPage.clickOnVideoContent();
  await searchResultPage.clickOnDownloadBtn();
  await searchResultPage.clickOnDownloadFreeBtn();
});
