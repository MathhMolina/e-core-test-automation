import loginPage from "../../pages/loginPage";

describe("Login", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Should authenticate in the application with valid credentials", () => {
		cy.fixture("login/loginSucessfulFixture").then((userData) => {
			loginPage.Login(userData.Username, userData.Password);
			cy.url().should("be.equal", `${Cypress.config("baseUrl")}account`);
			cy.contains("Invoice List");
		});
	});

	const userData = require("../../fixtures/login/loginFailureFixture.json");

	userData.forEach((credentials) => {
		it(
			"Should denies the user login with invalid credentials: " +
				credentials.Username +
				"/" +
				credentials.Password,
			() => {
				loginPage.Login(credentials.Username, credentials.Password);
				loginPage.Alert().contains("Wrong username or password");
			}
		);
	});
});
