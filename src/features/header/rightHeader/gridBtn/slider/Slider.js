import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
import { SliderValue, SliderMin, SliderMax } from '../../rightHeaderSlice';
import { handleSliderChange } from '../../rightHeaderSlice';

function Slider() {
  const sliderValue = useAppSelector(SliderValue);
  const sliderMin = useAppSelector(SliderMin);
  const sliderMax = useAppSelector(SliderMax);
  const dispatch = useAppDispatch();

  return (
    <div className="slider">
      <input
        type="range"
        min={sliderMin}
        max={sliderMax}
        value={sliderValue}
        steps="1"
        onChange={(e) => dispatch(handleSliderChange(Number(e.target.value)))}
      />
    </div>
  );
}

export default Slider;
