export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    // срабатывает когда заходишь на google.com
    console.log('Hello content.');
  },
});
