import AnchorBtns from './anchorBtns/AnchorBtns';
import MyContacts from './myContacts/MyContacts';

function LeftContact() {
  return (
    <section className="left-contact" aria-label="Contact details">
      <MyContacts />
      <AnchorBtns />
    </section>
  );
}

export default LeftContact;
