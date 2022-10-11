import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import { ContactMeBtnState } from '../rightHeaderSlice';
import { handleContactMeBtnClick } from '../../../webBody/webBodySlice';
import { MdContacts } from 'react-icons/md';
import Button from '../../dependencies/Button';

function ContactMeBtn() {
  const contactMeBtn = useAppSelector(ContactMeBtnState);
  const dispatch = useAppDispatch();

  return (
    <>
      {contactMeBtn && (
        <Button
          title="Contact Me"
          ariaLabel="Contact me"
          handleBtnClick={() => dispatch(handleContactMeBtnClick())}
          icon={<MdContacts className="icon" data-testid="contact-btn-icon" />}
        />
      )}
    </>
  );
}

export default ContactMeBtn;
