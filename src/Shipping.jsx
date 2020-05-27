import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Shipping',
  render() {
    return (
      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>
    );
  }
});
