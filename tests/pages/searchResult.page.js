export { expect } from "@playwright/test";

class SearchResultPage {
  constructor(page) {
    this.page = page;
    this.priceBtn = page.getByRole("button", { name: "Price" });
    this.checkboxFree = page.locator(
      "#facet-priceRange #facet-priceRange-1 + label"
    );
    this.videoContent = page.locator(".product-click").first();
  }

  async isSearchResultTextVisible() {
    await this.page.getByText("“sun” Search Results");
  }
  async openUrl() {
    await this.page.goto(
      "https://www.motionelements.com/search/video?s=sun&sort=match"
    );
  }
  async scrollToPrice() {
    await this.priceBtn.scrollIntoViewIfNeeded();
  }
  async clickOnPriceBtn() {
    await this.priceBtn.click();
  }
  async clickOnCheckboxFree() {
    await this.checkboxFree.click();
  }
  async clickOnVideoContent() {
    await this.videoContent.click();
  }
}
export default SearchResultPage;
