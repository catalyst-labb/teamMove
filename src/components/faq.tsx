import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is TeamMove?",
      answer: "TeamMove is a contest-driven ecosystem builder for the Cedra network. We transform ecosystem development into high-stakes contests where builders compete, ship, and rise through transparent merit."
    },
    {
      question: "What is Cedra Move?",
      answer: "Cedra is a Move Layer 1 blockchain that provides a secure and scalable foundation for decentralized applications. TeamMove helps you discover contests, bounties, and opportunities to build on the Cedra ecosystem.",
    },
    {
      question: "How do I get started with TeamMove?",
      answer: "Create an account, explore contests and opportunities, submit your solutions, and compete for rewards. TeamMove provides the infrastructure while you focus on building innovative solutions for the Cedra ecosystem.",
    },
    {
      question: "Do I need Move knowledge to use TeamMove?",
      answer: "While Move knowledge is helpful, TeamMove is designed to be accessible to developers of all levels. We provide resources, documentation, and support to help you get started with Move development on Cedra.",
    },
    {
      question: "What opportunities can I discover on TeamMove?",
      answer: "TeamMove helps you discover contests, bounties, grants, and RFPs within the Cedra ecosystem. Whether you're a developer, designer, or researcher, there are opportunities for everyone to contribute and earn rewards.",
    },
    {
      question: "Is TeamMove secure?",
      answer: "Yes, TeamMove uses industry-standard security practices and integrates with secure wallet providers. Your funds and data are protected with enterprise-grade security measures and on-chain verification.",
    }
  ];

  return (
  <section className="w-full py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-electric-blue bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about building on the Cedra ecosystem with TeamMove
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-electric-blue/30 transition-all duration-300 hover:glow-electric"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="text-electric-blue text-2xl transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg glow-electric hover:glow-electric-strong">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;