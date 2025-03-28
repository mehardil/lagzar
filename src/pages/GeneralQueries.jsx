import React from "react";
import Footer from "../components/Footer"; // Import Footer

const GeneralQueries = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">GENERAL QUERIES</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">IS CASH ON DELIVERY (COD) AVAILABLE?</h2>
        <p>Yes, after a 50% advance payment, the remaining 50% can be paid via COD.</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">IS BANK TRANSFER AVAILABLE?</h2>
        <p>Yes, bank transfer is available. Please place your order first and then send the payment to the following bank account:</p>
        <ul className="list-disc list-inside">
          <li><strong>Bank Account Number:</strong> 11122449854586</li>
          <li><strong>Bank Name:</strong> Meezan Bank</li>
          <li><strong>Account Title:</strong> GERMAN</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">HOW TO PLACE AN EXCHANGE REQUEST?</h2>
        <p>Contact us on WhatsApp at <strong>03319051913</strong> to place an exchange request.</p>
        <p>Please note:</p>
        <ul className="list-disc list-inside">
          <li>The exchange request must be raised within <strong>2 days</strong> of the delivery date.</li>
          <li>Reverse pickup will be done in <strong>2-3 working days</strong> by our courier partner. Once we receive the product, we will get in touch with you to confirm your request.</li>
          <li>All returned products must be unused, unwashed, and undamaged. They must be returned with the original packing and tags. Items without tags will not be accepted.</li>
          <li>The new order will be processed as soon as the exchange item is verified at our warehouse. The exchange process is subject to your item meeting the above conditions.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">ARE THERE ANY ADDITIONAL CHARGES FOR RETURNS/EXCHANGE?</h2>
        <p>For incorrect order delivered, there will be a free replacement or a full refund.</p>
        <p>For a correct order delivered, a return shipping fee of <strong>RS 200/-</strong> will be charged for the new exchange or will be deducted from the refund.</p>
      </div>
     
    </div>
    <Footer />
    </div>
  );
};

export default GeneralQueries;