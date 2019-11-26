// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'use-action-cable';

// shared
import Example from './Example';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ActionCableProvider url="/cable">
      <Example />
    </ActionCableProvider>,
    document.body.appendChild(document.createElement('div'))
  );
});
