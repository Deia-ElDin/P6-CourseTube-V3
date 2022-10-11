import ContactBlock from './contactBlock/ContactBlock';
import contactData from '../../../../../../data/contactData';

function MyContacts() {
  const ContactArray = contactData.map((contact) => {
    const { id, icon, title, text } = contact;

    return (
      <ContactBlock key={id} id={id} icon={icon} title={title} text={text} />
    );
  });

  return <div className="contacts-container">{ContactArray}</div>;
}

export default MyContacts;
