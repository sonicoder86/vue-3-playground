import { mount } from '@vue/test-utils';
import Coupon from './Coupon.vue';

describe('Coupon', () => {
  it('should trigger coupon percent on button click', () => {
    const wrapper = mount(Coupon, { props: { percent: 10 } });

    wrapper.find<HTMLButtonElement>('.btn').trigger('click');

    expect(wrapper.emitted().redeem).toHaveLength(1);
    expect(wrapper.emitted().redeem[0]).toEqual([10]);
  });
});
