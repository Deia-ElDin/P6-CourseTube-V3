import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import createElements from '../../setUpTests/createElements';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';

describe('App / Contact Me (Form)', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test('should be able to type into the form inputs', () => {
    // Step 1: Clicking on contactMeBtn
    const [contactMeBtn, coursetubePage, contactMePage] = createElements({
      contactMeBtn: true,
      coursetubePage: true,
      contactMePage: true,
    });
    expect(coursetubePage).toBeInTheDocument();
    expect(contactMePage).not.toBeInTheDocument();

    userEvent.click(contactMeBtn);

    const [coursetubePage2, contactMePage2] = createElements({
      coursetubePage: true,
      contactMePage: true,
    });
    expect(coursetubePage2).not.toBeInTheDocument();
    expect(contactMePage2).toBeInTheDocument();

    const [nameInput, emailInput, subjectInput, messageTextArea] =
      createElements({
        testContactMePage: true,
        nameInput: true,
        emailInput: true,
        subjectInput: true,
        messageTextArea: true,
      });

    // Step 2: The inputs should be empty
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(subjectInput.value).toBe('');
    expect(messageTextArea.value).toBe('');

    // Step 3: Type into the inputs
    userEvent.type(nameInput, 'Deia');
    userEvent.type(emailInput, 'Deia.Tech2021@gmail.com');
    userEvent.type(subjectInput, 'Testing the Form');
    userEvent.type(messageTextArea, 'Will pass');
    expect(nameInput.value).toBe('Deia');
    expect(emailInput.value).toBe('Deia.Tech2021@gmail.com');
    expect(subjectInput.value).toBe('Testing the Form');
    expect(messageTextArea.value).toBe('Will pass');
  });
});
