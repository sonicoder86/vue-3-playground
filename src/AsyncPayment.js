import { defineAsyncComponent } from 'vue';
import Spinner from './Spinner';

export default defineAsyncComponent({
  loader: () => import('./Payment.jsx'),
  loadingComponent: Spinner,
  delay: 0,
  onError(error, retry, fail, attempts) {
    console.log('Retrying to load component', error);
    retry();
  }
});
