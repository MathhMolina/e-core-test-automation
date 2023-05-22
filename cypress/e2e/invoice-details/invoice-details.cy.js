import invoiceListPage from "../../pages/invoice-list-page";
import invoiceDetailsPage from "../../pages/invoice-details-page";

describe("Invoice Details", () => {
	beforeEach(() => {
		cy.fixture("login/login-successful-fixture").then((userData) => {
			cy.login();
		});
		cy.visit("/account");
	});
	it("TC003 - Validate invoice details", () => {
		invoiceListPage
			.InvoiceDetailsLink(1)
			.invoke("removeAttr", "target")
			.click();
		cy.fixture("invoice-details/invoice-details-fixture").then(
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
					.invoke("text")
					.then((text) => text.replace(/\n/g, "").trim())
					.should(
						"equal",
						invoiceData.CustomerDetails.replaceAll("\n", "")
					);

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
