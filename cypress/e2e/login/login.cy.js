import loginPage from "../../pages/login-page";
import invoiceListPage from "../../pages/invoice-list-page";

describe("Login", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Should authenticate in the application with valid credentials", () => {
		cy.fixture("login/login-successful-fixture").then((userData) => {
			loginPage.Login(userData.Username, userData.Password);
			cy.url().should("be.equal", `${Cypress.config("baseUrl")}account`);
			invoiceListPage.InvoiceListHeader().should("exist");
		});
	});

	const userData = require("../../fixtures/login/login-failure-fixture.json");

	userData.forEach((credentials) => {
		it(
			"Should denies the user login with invalid credentials: " +
				credentials.Username +
				"/" +
				credentials.Password,
			() => {
				loginPage.Login(credentials.Username, credentials.Password);
				loginPage
					.Alert()
					.contains("Wrong username or password")
					.should("exist");
			}
		);
	});
});
