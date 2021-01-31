import { reactive, ref, computed } from 'vue';

export interface Product {
  firstName: string;
  firstPrice: number;
  firstQuantity: number;
}

export const useCart = () => {
  const product = reactive<Product>({ firstName: 'First Product', firstPrice: 10, firstQuantity: 1 });
  const secondName = ref('Second Product');
  const secondPrice = ref(20);
  const secondQuantity = ref(2);
  const total = computed<number>(() => (product.firstPrice * product.firstQuantity + secondPrice.value * secondQuantity.value) * (100 - coupon.value) / 100);
  const coupon = ref(10);
  const setCoupon = (percent): void => coupon.value = percent;

  return { product, secondName, secondPrice, secondQuantity, total, coupon, setCoupon };
};
