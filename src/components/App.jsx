import React from 'react';

import '../css/App.css';

import {
  CButton,
  CEButton,
  DeleteButton,
  InverseButton,
  NumberButton,
  OperandeButton,
} from '../containers';
import Screen from './Screen';

const App = () => (
  <div className="container mt-5 mbg1">
    <div className="row">
      <Screen />
    </div>
    <div className="mt-3 row">
      <div className="col-4 offset-1">
        <DeleteButton />
      </div>
      <div className="col-3">
        <CEButton />
      </div>
      <div className="col-3 red-border">
        <CButton />
      </div>
    </div>
    <div className="mt-3 row">
      <div className="col-2 offset-1">
        <NumberButton number="1" />
      </div>
      <div className="col-2">
        <NumberButton number="2" />
      </div>
      <div className="col-2">
        <NumberButton number="3" />
      </div>
      <div className="col-2">
        <OperandeButton operande="+" />
      </div>
      <div className="col-2">
        <InverseButton />
      </div>
    </div>
    <div className="mt-3 row over-div">
      <div className="col-2 offset-1 red-border">
        <NumberButton number="4" />
      </div>
      <div className="col-2">
        <NumberButton number="5" />
      </div>
      <div className="col-2">
        <NumberButton number="6" />
      </div>
      <div className="col-2">
        <OperandeButton operande="-" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-primary btn-block maxi">=</button>
      </div>
    </div>
    <div className="mt-3 row under-div">
      <div className="col-2 offset-1">
        <NumberButton number="7" />
      </div>
      <div className="col-2">
        <NumberButton number="8" />
      </div>
      <div className="col-2">
        <NumberButton number="9" />
      </div>
      <div className="col-2 red-border">
        <OperandeButton operande="x" />
      </div>
    </div>
    <div className="mt-3 mb-3 row under-div">
      <div className="col-4 offset-1 red-border">
        <NumberButton number="0" />
      </div>
      <div className="col-2 red-border">
        <NumberButton number="." />
      </div>
      <div className="col-2 red-border">
        <OperandeButton operande="/" />
      </div>
    </div>
  </div>
);

export default App;
