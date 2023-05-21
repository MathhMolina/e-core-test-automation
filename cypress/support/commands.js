import loginPage from "../pages/loginPage";

Cypress.Commands.add("login", () => {
	cy.session("login", () => {
		cy.visit("/");
		cy.fixture("login/loginSucessfulFixture").then((userData) => {
			loginPage.Login(userData.Username, userData.Password);
		});
	});
});
