import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineComp from './Timeline';
import Accord from './Accordion';
import SpanningTable from './SpanTable'

const App: React.FC = () => {
  return (
    <div >
      <div>
        <h3>Time Line Component</h3>
        <TimelineComp/>
      </div>

      <div>
        <h3>OM Bot Quick Links Init Screen</h3>
      </div>

      <div>
        <h3>Accordion Expansion Panel Component</h3>
        <Accord/>
      </div>

      <div>
        <h3>Span Table Component</h3>
        <SpanningTable/>
      </div>

      <div>
        <h3>Listable Type Table Component</h3>
      </div>

    </div>
  );
}

export default App;
