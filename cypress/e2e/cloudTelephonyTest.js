import LoginPage from '../../support/pages/LoginPage';
import CallPage from '../../support/pages/CallPage';
import testData from '../../fixtures/testData.json';

describe('Telephony App login and call flow ', () => {
  const loginPage = new LoginPage();
  const callPage = new CallPage();

//to visit url everytime before performing any steps
  beforeEach(() => {
    cy.visit('https://your-telephony-app-url.com');
  });

//As testData is already mentioned in fixture folder so , login with username and password 
  it('should log in as a test user and initiate a call', () => {
    LoginPage.login(testData.username, testData.password);

// to validate successful login
    cy.url().should('include', '/dashboard'); //asserting url
    cy.get('h1').should('contain.text', 'Dashboard'); //asserting if heading contains text dashboard

    cy.get('button#call_button').click(); //selecting call initialize option
    cy.url().should('include', '/initiate-call'); //asserting call initiation url

    CallPage.initiateCall(testData.contactName); //initiating call by selecting contactname
  CallPage.validateCallStatus(testData.expectedCallStatus); //validating call status if it is inprogress or completed
  });
});
