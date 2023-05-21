import invoiceListPage from "../../pages/InvoiceListPage";
import invoiceDetailsPage from "../../pages/InvoiceDetailsPage";

describe("Invoice Details", () => {
	beforeEach(() => {
		cy.fixture("login/loginSucessfulFixture").then((userData) => {
			cy.login();
		});
		cy.visit("/account");
	});
	it.only("Should show correct information at first invoice details page", () => {
		invoiceListPage
			.InvoiceDetailsLink(1)
			.invoke("removeAttr", "target")
			.click();
		cy.fixture("invoice-details/InvoiceDetailsFixture").then(
			(invoiceData) => {
				invoiceDetailsPage
					.HotelName()
					.should("have.text", invoiceData.HotelName);

				invoiceDetailsPage
					.InvoiceDate()
					.should(
						"have.text",
						"Invoice Date: " + invoiceData.InvoiceDate
					);

				invoiceDetailsPage
					.DueDate()
					.should("have.text", "Due Date: " + invoiceData.DueDate);

				invoiceDetailsPage
					.InvoiceNumber()
					.should(
						"have.text",
						"Invoice #" + invoiceData.InvoiceNumber + " details"
					);

				invoiceDetailsPage
					.BookingCode()
					.should("have.text", invoiceData.BookingCode);

				invoiceDetailsPage
					.CustomerDetails()
					.should("have.text", invoiceData.CustomerDetails);

				invoiceDetailsPage.Room().should("have.text", invoiceData.Room);

				invoiceDetailsPage
					.CheckIn()
					.should("have.text", invoiceData.CheckIn);

				invoiceDetailsPage
					.CheckOut()
					.should("have.text", invoiceData.CheckOut);

				invoiceDetailsPage
					.TotalStayCount()
					.should("have.text", invoiceData.TotalStayCount);

				invoiceDetailsPage
					.TotalStayAmount()
					.should("have.text", invoiceData.TotalStayAmount);

				invoiceDetailsPage
					.DepositNow()
					.should("have.text", invoiceData.DepositNow);

				invoiceDetailsPage
					.TaxVAT()
					.should("have.text", invoiceData.TaxVAT);

				invoiceDetailsPage
					.TotalAmount()
					.should("have.text", invoiceData.TotalAmount);
			}
		);
	});
});
