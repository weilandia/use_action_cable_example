// libraries
import React from 'react';
import { useActionCable } from 'use-action-cable';

// shared
import { webNotificationsChannel, webNotificationsChannelHandlers } from 'channels/webNotifications';

const Example = () => {
  useActionCable({ channel: webNotificationsChannel }, webNotificationsChannelHandlers());

  return (
    <div>
      This component uses useActionCable. You can look a the connection in the network tab and an alert will be transmitted from the server shortly.
    </div>
  )
};

export default Example;
