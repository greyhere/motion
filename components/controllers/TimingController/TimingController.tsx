import { styled } from 'styletron-react';

import { Card, TabGroup, Tab, Range, Toggle } from '@components/ui';
import { useRepeatStore } from '@store/useRepeatStore';
import { useAutoreverseStore } from '@store/useAutoreverseStore';
import { useSpeedStore } from '@store/useSpeedStore';
import { useDelayStore } from '@store/useDelayStore';

const TimingController = () => {
  const repeat = useRepeatStore((state) => state.repeat);
  const incrementRepeat = useRepeatStore((state) => state.incrementRepeat);
  const decrementRepeat = useRepeatStore((state) => state.decrementRepeat);

  const autoreverse = useAutoreverseStore((state) => state.autoreverse);
  const toggleAutoreverse = useAutoreverseStore(
    (state) => state.toggleAutoreverse
  );

  const speed = useSpeedStore((state) => state.speed);
  const setSpeed = useSpeedStore((state) => state.setSpeed);

  const delay = useDelayStore((state) => state.delay);
  const setDelay = useDelayStore((state) => state.setDelay);

  return (
    <Card elevation={1} title='Timing'>
      {/* eslint-disable-next-line no-use-before-define */}
      <Label>
        <p>Repeat</p>
        {/* eslint-disable-next-line no-use-before-define */}
        <LableValue>{repeat}</LableValue>
      </Label>
      {/**
       *
       * TODO: change this to button group and button component
       *
       */}
      <TabGroup>
        <Tab
          isActive={false}
          onClick={decrementRepeat}
          disabled={repeat < 2}
          sx={{
            borderTopRightRadius: 'none',
            borderBottomRightRadius: 'none',
            borderRight: '.15em solid var(--color-background-card-elevated)',
            ':hover': {
              background: 'var(--color-tab-active)',
            },
          }}
        >
          -
        </Tab>
        <Tab
          isActive={false}
          onClick={incrementRepeat}
          sx={{
            borderTopLeftRadius: 'none',
            borderBottomLeftRadius: 'none',
            ':hover': {
              background: 'var(--color-tab-active)',
            },
          }}
        >
          +
        </Tab>
      </TabGroup>
      {/* ^^^^^^^^^^^^^ */}

      {/* eslint-disable-next-line no-use-before-define */}
      <Label>
        <p>Autoreverses</p>
        <Toggle checked={autoreverse} onClickHandler={toggleAutoreverse} />
      </Label>

      <Range
        label='Speed'
        id='speed_range'
        min={0.25}
        max={2}
        step={0.25}
        value={speed}
        valuePostfix='x'
        handleOnChange={setSpeed}
        sx={{
          marginTop: '1em',
        }}
      />

      <Range
        label='Delay'
        id='delay_range'
        max={1000}
        step={50}
        value={delay}
        valuePostfix=' ms'
        handleOnChange={setDelay}
        sx={{
          marginTop: '1em',
        }}
      />
    </Card>
  );
};

// TODO: consistent spacing and extract to a component
const Label = styled('div', {
  marginTop: 'var(--padding)',
  marginBottom: 'var(--padding)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LableValue = styled('span', {
  color: 'var(--color-text-secondary)',
});

export default TimingController;