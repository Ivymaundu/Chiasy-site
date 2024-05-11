
function FAQ() {
  const faqs = [
    { question: 'What is your return policy?', answer: 'Our return policy allows returns within 30 days of purchase.' },
    { question: 'How can I contact customer support?', answer: 'You can contact our customer support team at support@example.com.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to most countries.' },
    { question: 'Have you patnnered with other companies?', answer: 'Yes,we have made partnerships with three major comamies' },
    { question: 'Do you have a physical location', answer: 'We have 5 physical branches,In: Mombasa, Nairobi,SouthAfrica and Uganda' }

  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3><strong>{faq.question}</strong></h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
