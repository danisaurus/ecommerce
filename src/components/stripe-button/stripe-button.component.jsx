import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IXyioLwqupfRy2q8N9bw41fTuV4FyHYZyw6ouCTzV0HaS4CRKPbbrhGNZLIMtmiPsYxejk1lUoZ9AJKWQ1OIJrx00H3ZFy9Ml';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} 
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    );

};



export default StripeCheckoutButton;