export const webNotificationsChannel = 'WebNotificationsChannel';

export const webNotificationsChannelHandlers = () => ({
  received({ action, ...params }) {
    switch (action) {
      case 'example':
        alert(`From Action Cable!\n\n${new Date}`)
        break;
      default:
    }
  }
});
