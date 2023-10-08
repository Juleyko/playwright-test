const { expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator(
      ".form-control.border-0.rounded-4.pl-0.no-invert.text-xl"
    );
    this.categories = page.locator(
      ".btn.btn-explore-toggle.text-nowrap.btn-light"
    );
    this.facebookIcon = page.locator(
      ".btn.btn-simple-secondary.btn-social:nth-of-type(1)"
    );
    this.youtubeIcon = page.locator(
      ".btn.btn-simple-secondary.btn-social:nth-of-type(2)"
    );
    this.logoMainPage = page.locator(".logo-light");
    this.footer = page.locator(".footer-row.row");
    this.localizationBtn = page.locator("#__BVID__65__BV_toggle_");
    this.loginBtn = page.locator("header .btn.btn-simple-secondary");
    this.searchBtn = page.locator(".btn-link.btn-search");
    this.searchKeyword = "Sun";
  }
  async openUrl() {
    await this.page.goto("https://motionelements.com");
  }
  async isPageLoaded() {
    await this.page.waitForLoadState();
  }
  async isSearchBarVisible() {
    await expect(this.searchBar).toBeVisible();
  }
  async isCategoriesVisible() {
    await expect(this.categories).toBeVisible();
  }
  async isLocalizationBtnVisible() {
    await expect(this.localizationBtn).toBeVisible();
  }
  async isLoginBtnVisible() {
    await expect(this.loginBtn).toBeVisible();
  }

  async scrollToFooter() {
    await this.footer.scrollIntoViewIfNeeded();
  }
  async isFacebookIconVisible() {
    await expect(this.facebookIcon).toBeVisible();
  }
  async isYoutubeIconVisible() {
    await expect(this.youtubeIcon).toBeVisible();
  }
  async fillSearchField() {
    await this.searchBar.fill(this.searchKeyword);
  }
  async ckickOnSearchBtn() {
    await this.searchBtn.click();
  }
  async ckickOnLoginBtn() {
    await this.loginBtn.click();
  }
}
export default HomePage;
