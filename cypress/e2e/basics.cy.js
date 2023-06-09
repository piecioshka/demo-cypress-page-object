const { HomePage } = require("../page-objects/home-page.po");

describe("Page: piecioshka.pl", () => {
  /**
   * @type {HomePage}
   */
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
    homePage.open();
  });

  it("should have a link to blog", () => {
    homePage.getBlogLink().should("be.visible");
  });

  describe("After clicking on a link to a blog", () => {
    it("should redirect to blog and title should be changed", () => {
      const blogPage = homePage.openBlogPage();
      cy.url().should("contains", blogPage.url);
      blogPage.getPageTitle().should("have.text", "Blog");
    });
  });
});
