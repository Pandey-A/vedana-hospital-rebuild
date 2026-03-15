import { motion } from "framer-motion";
import { Shield, Users, Award, Clock, Heart, Building } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and latest medical technologies for precise treatments.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly qualified specialists with decades of experience in fertility treatments.",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "Consistently achieving above-average success rates in IVF and fertility treatments.",
  },
  {
    icon: Clock,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique needs and circumstances.",
  },
  {
    icon: Heart,
    title: "Compassionate Approach",
    description: "We understand your journey and provide emotional support throughout the process.",
  },
  {
    icon: Building,
    title: "All Under One Roof",
    description: "Complete fertility and maternity services without outsourcing your care.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your <span className="text-gradient">Hopes & Dreams</span> Are In Safe Hands
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our pioneering work has led to the development and implementation of new technologies 
              and methods to overcome both female and male infertility. Our beautiful and spacious 
              hospital provides discretion and confidentiality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We understand our patients are placing their hopes and dreams in our hands. 
              That's why we treat every patient with the utmost care, respect, and dedication 
              to achieving the best possible outcomes.
            </p>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-background border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── after reading all the reasons to trust */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#FFF7FA] to-[#EAF7FC] border border-[#F1D7E1] px-5 py-7 text-center md:px-10 md:py-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9B2B4E] md:text-sm">Take the First Step</p>
          <h3 className="mt-2 text-xl font-extrabold text-[#1D1E25] md:text-3xl">
            Ready to start your parenthood journey?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#555762] md:text-base">
            Book a free consultation with Dr. Sangeeta Tajpuriya and get a personalised fertility assessment.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#hero"
              className="w-full rounded-xl bg-[#46A2C1] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow transition hover:bg-[#3488A5] sm:w-auto"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/919766913811?text=Hi, I would like to know more about IVF treatment options"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#1a9e4a] transition hover:bg-[#f0fff4] sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
