import { mount } from '@vue/test-utils';
import Username from './Username.vue';

describe('Username', () => {
  it('should display required text', () => {
    const wrapper = mount(Username);

    expect(wrapper.find('.invalid-feedback').text()).toEqual('Your username is required.');
  });
});
