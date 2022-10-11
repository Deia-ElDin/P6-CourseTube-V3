import CloseBtn from './closeBtn/CloseBtn';
import Contacts from './contacts/Contacts';

function ContactMe() {
  return (
    <section className="contact-section" data-testid="contact-page">
      <CloseBtn />
      <Contacts />
    </section>
  );
}

export default ContactMe;
