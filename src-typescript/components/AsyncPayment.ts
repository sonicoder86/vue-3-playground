import { defineAsyncComponent } from 'vue';
import Spinner from './Spinner';

export default defineAsyncComponent({
  loader: () => import('./Payment.tsx'),
  loadingComponent: Spinner,
  delay: 0,
  onError(error: Error, retry: () => void, fail: () => void, attempts: number) {
    console.log('Retrying to load component', error);
    retry();
  }
});
