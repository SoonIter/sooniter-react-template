import { store } from "foca";

store.init();

// https://cn.vitejs.dev/guide/api-hmr.html#hot-acceptcb
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('Hot updated: store');
  });
}