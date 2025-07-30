import React from 'react';
import FAQItem from '../components/FAQItem';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const faqData = [
  {
    question: 'What is the ADmyBRAND AI Suite?',
    answer:
      'It is an all-in-one platform that uses artificial intelligence to automate and optimize digital marketing tasks for agencies, including analytics, content generation, and audience segmentation.'
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Pro plan. No credit card is required to get started. You can explore all the features and see the value for yourself.'
  },
  {
    question: 'What kind of support can I expect?',
    answer:
      'We offer email support for all plans. Our Pro and Enterprise plans include priority support, and the Enterprise plan comes with a dedicated account manager to ensure your success.'
  },
  {
    question: 'Can I integrate it with my existing tools?',
    answer:
      'Absolutely. Our platform is designed to seamlessly integrate with major marketing tools like Google Ads, Facebook Ads Manager, Google Analytics, and more.'
  }
];

const FAQ = () => {
  return (
    <ScrollAnimationWrapper variant="fade-up">
      <section id="faq" className="text-white py-16">
        <div className="container mx-auto px-6 lg:w-3/5">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-2 text-gray-400">
              Have questions? We have answers. If you don't see your question here, feel free to reach out.
            </p>
          </div>
          <div>
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default FAQ;
