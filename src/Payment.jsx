import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Payment',

  setup() {
    const payments = [
      { id: 'credit', name: 'Credit card' },
      { id: 'debit', name: 'Debit card' },
      { id: 'paypal', name: 'Paypal' },
    ];

    return { payments };
  },

  render() {
    return (
      <div className="d-block my-3">
        {this.payments.map(payment => (
          <div className="custom-control custom-radio">
            <input id={payment.id} name="paymentMethod" type="radio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor={payment.id}>{payment.name}</label>
          </div>
        ))}
      </div>
    );
  }
});



