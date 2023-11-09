<template>
  <div class='Analytics'>
      <slot></slot>
  </div>
</template>

<script>
/* eslint-disable max-len */

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}

const store = {
  debug: true,
  state: {
    events: [],
    skip: false,
  },
  pushEvent(pathname) {
    console.log('pushEvent triggered with', pathname);
    this.state.events.push({
      pathname,
      timestamp: Date.now(),
    });
  },
};

export default {
  name: 'Analytics',
  data() {
    return {
      store,
    };
  },
  beforeCreate() {
    store.pushEvent(window.location.pathname);
  },
  created() {
    window.addEventListener('pagehide', this.endSession);
    window.addEventListener('beforeunload', this.endSession);
    window.addEventListener('unload', this.endSession);
    // for iOS when the focus leaves the tab
    if (iOS()) {
      window.addEventListener('blur', this.endSession);
    }
  },
  destroyed() {
    window.removeEventListener('pagehide', this.endSession);
    window.removeEventListener('beforeunload', this.endSession);
    window.removeEventListener('unload', this.endSession);
    if (iOS()) {
      window.removeEventListener('blur', this.endSession);
    }
  },
  methods: {
    endSession() {
      if (window.location.hostname === 'localhost') {
        return;
      }

      // skip if the function has already been called
      if (store.state.skip) {
        return;
      }
      store.state.skip = true;

      const data = {
        events: store.state.events,
        pageLoad: window.performance.timing.loadEventEnd - window.performance.timing.responseEnd,
      };

      // TODO: URL as config?
      const url = 'https://2orq0ufifa.execute-api.eu-west-1.amazonaws.com/Prod/analytics';

      const { vendor } = window.navigator;

      // https://bugs.webkit.org/show_bug.cgi?id=188329
      // Safari bug is fixed but not yet released. When that happens, will need to check safari version also
      // eslint-disable-next-line no-bitwise
      if (window.navigator.sendBeacon && !~vendor.indexOf('Apple')) {
        console.log('try to send the beacon');
        const beacon = window.navigator.sendBeacon(url, JSON.stringify(data));
        if (beacon) {
          console.log('Successfully sent beacon');
          return;
        }
      }
      // if it failed to queue, (some adblockers will block all beacons), then try the other way
      console.log('beacon failed');

      // Instead, send an async request
      // Except for iOS :(
      const async = !iOS();
      const request = new XMLHttpRequest();
      request.open('POST', url, async); // 'false' makes the request synchronous
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));

      // Synchronous request cause a slight delay in UX as the browser waits for the response
      // I've found it more performant to do an async call and use the following hack to keep the loop open while waiting

      // Chrome doesn't care about waiting
      // eslint-disable-next-line no-bitwise
      if (!async || ~vendor.indexOf('Google')) {
        return;
      }

      const t = Date.now() + 300;
      while (Date.now() < t) {
        // postpone the JS loop for 300ms so that the request can complete
        // a hack necessary for Firefox and Safari refresh / back button
      }
    },

  },
};
</script>
