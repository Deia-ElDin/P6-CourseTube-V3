import { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/hooks';
import {
  handleSearchInputChange,
  clearSearchInput,
} from '../middleHeaderSlice';
import { handleUserSearch } from '../../../webBody/webBodySlice';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { BsFillMicFill } from 'react-icons/bs';
import { BsFillMicMuteFill } from 'react-icons/bs';

function Mic() {
  const dispatch = useAppDispatch();
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    dispatch(handleSearchInputChange(transcript.toLowerCase()));

    if (!listening && transcript) {
      dispatch(handleUserSearch(transcript.toLowerCase()));
      dispatch(clearSearchInput());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, listening, dispatch]);

  return (
    <button
      className="search-mic"
      onClick={
        listening
          ? SpeechRecognition.stopListening
          : SpeechRecognition.startListening
      }
      title="Search with your voice"
      aria-label="Mic"
    >
      {listening ? (
        <BsFillMicFill className="icon-2" data-testid="mic-on" />
      ) : (
        <BsFillMicMuteFill className="icon-2" data-testid="mic-off" />
      )}
      {listening && <div className="outer-1"></div>}
      {listening && <div className="outer-2"></div>}
    </button>
  );
}

export default Mic;
