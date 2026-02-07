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
      </div>
    </section>
  );
};

export default WhyUs;
