import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import InstrumentSelectorKnob from './';

class KnobWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState({value: newValue});
    action('changed')(newValue);
  }

  render() {
    return <InstrumentSelectorKnob value={this.state.value} onChange={this.handleChange} />;
  }
}

storiesOf('InstrumentSelectorKnob', module)
  .add('default', () => (
    <KnobWrapper />
  ));