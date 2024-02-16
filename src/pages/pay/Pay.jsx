// Pay.jsx
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import "./Pay.scss";

const stripePromise = loadStripe(
  "pk_test_51O5mZbSIOdULUQCMKQo7pYrVbSvDopyWrh1tuE4WFNKzM5Ex8TDsz9S5wcNgzZpMyPjuprwbT9xplM0oGNs9A5Lm00J1eXZoGE"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPaymentIntent();
  }, [id]);

  const renderCheckoutForm = () => {
    if (!clientSecret) {
      return null;
    }

    const options = {
      clientSecret,
      appearance: {
        theme: 'stripe',
      },
    };

    return (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    );
  };

  return <div className="pay">{renderCheckoutForm()}</div>;
};

export default Pay;
