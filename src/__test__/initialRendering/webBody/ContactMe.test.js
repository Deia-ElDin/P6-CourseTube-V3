import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import ContactMe from '../../../features/webBody/contactMe/ContactMe';
import createElements from '../../setUpTests/createElements';
import contactData from '../../../data/contactData';

describe('ContactMe', () => {
  beforeEach(() => {
    renderWithProviders(<ContactMe />);
  });

  describe('Features', () => {
    describe('ContactMe', () => {
      test('should render the contactMePage', () => {
        const [contactMePage] = createElements({
          contactMePage: true,
        });
        expect(contactMePage).toBeInTheDocument();
      });

      describe('Close BTn', () => {
        test('should render the contactMeCloseBtn and its Icon', () => {
          const [contactMeCloseBtn, contactMeCloseBtnIcon] = createElements({
            testContactMePage: true,
            contactMeCloseBtn: true,
            contactMeCloseBtnIcon: true,
          });

          expect(contactMeCloseBtn).toBeInTheDocument();
          expect(contactMeCloseBtnIcon).toBeInTheDocument();
        });
      });

      describe('Contacts', () => {
        describe('Left Contact', () => {
          test('should render the leftContactSection', () => {
            const [leftContactSection] = createElements({
              testContactMePage: true,
              leftContactSection: true,
            });

            expect(leftContactSection).toBeInTheDocument();
          });

          describe('MyContacts', () => {
            test('should render (totalContacts) contactBlocks', () => {
              const [contactBlocks] = createElements({
                testContactMePage: true,
                contactBlocks: true,
              });

              const totalContacts = contactData.length;
              expect(contactBlocks.length).toBe(totalContacts);
            });

            describe('Contact Block / Testing Contacts Rendering', () => {
              test('should render the 1st contact with the correct details', () => {
                const contactIndex = 0;
                const title = contactData[contactIndex].title;
                const text = contactData[contactIndex].text;

                const [contactTitle, contactText] = createElements({
                  testContactMePage: true,
                  contactIndex: contactIndex,
                  contactTitle: title,
                  contactText: text,
                });

                expect(contactTitle).toBeInTheDocument();
                expect(contactText).toBeInTheDocument();
              });

              test('should render the last contact with the correct details', () => {
                const totalContacts = contactData.length;
                const contactIndex = totalContacts - 1;
                const title = contactData[contactIndex].title;
                const text = contactData[contactIndex].text;

                const [contactTitle, contactText] = createElements({
                  testContactMePage: true,
                  contactIndex: contactIndex,
                  contactTitle: title,
                  contactText: text,
                });

                expect(contactTitle).toBeInTheDocument();
                expect(contactText).toBeInTheDocument();
              });
            });
          });

          describe('AnchorBtns', () => {
            test('should render linkedin anchorBtn with its icon', () => {
              const [linkedInAnchorBtn, linkedInAnchorBtnIcon] = createElements(
                {
                  testContactMePage: true,
                  linkedInAnchorBtn: true,
                  linkedInAnchorBtnIcon: true,
                }
              );

              expect(linkedInAnchorBtn).toBeInTheDocument();
              expect(linkedInAnchorBtn).toHaveAttribute(
                'href',
                'https://www.linkedin.com/in/deia-hamad-577a1814a/'
              );
              expect(linkedInAnchorBtnIcon).toBeInTheDocument();
            });

            test('should render github anchorBtn with its icon', () => {
              const [githubAnchorBtn, githubAnchorBtnIcon] = createElements({
                testContactMePage: true,
                githubAnchorBtn: true,
                githubAnchorBtnIcon: true,
              });

              expect(githubAnchorBtn).toBeInTheDocument();
              expect(githubAnchorBtn).toHaveAttribute(
                'href',
                'https://www.github.com/DeiaHamad'
              );
              expect(githubAnchorBtnIcon).toBeInTheDocument();
            });
          });
        });

        describe('Right contact', () => {
          test('should render the rightContactForm', () => {
            const [rightContactForm] = createElements({
              testContactMePage: true,
              rightContactForm: true,
            });

            expect(rightContactForm).toBeInTheDocument();
          });

          test('should render the all the rightContactForm components', () => {
            const [
              nameLabel,
              nameInput,
              emailLabel,
              emailInput,
              subjectLabel,
              subjectInput,
              messageLabel,
              messageTextArea,
              submitBtn,
            ] = createElements({
              testContactMePage: true,
              nameLabel: true,
              nameInput: true,
              emailLabel: true,
              emailInput: true,
              subjectLabel: true,
              subjectInput: true,
              messageLabel: true,
              messageTextArea: true,
              submitBtn: true,
            });

            expect(nameLabel).toBeInTheDocument();
            expect(nameInput).toBeInTheDocument();
            expect(emailLabel).toBeInTheDocument();
            expect(emailInput).toBeInTheDocument();
            expect(subjectLabel).toBeInTheDocument();
            expect(subjectInput).toBeInTheDocument();
            expect(messageLabel).toBeInTheDocument();
            expect(messageTextArea).toBeInTheDocument();
            expect(submitBtn).toBeInTheDocument();
          });
        });
      });
    });
  });
});
