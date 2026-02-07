import { motion } from "framer-motion";
import { Baby, Stethoscope, HeartPulse, Syringe, Microscope, MonitorPlay } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Baby,
    title: "IVF Treatment",
    description: "The original 'test-tube' baby technique, developed for treating infertility with over 40 years of proven success.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Microscope,
    title: "ICSI",
    description: "Intra-cytoplasmic sperm injection where a single sperm is injected directly into an egg for optimal fertilization.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Stethoscope,
    title: "Laparoscopy",
    description: "Minimally invasive keyhole surgery performed through small incisions with the help of advanced cameras.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: HeartPulse,
    title: "Painless Delivery",
    description: "Epidural anesthesia allows mothers to experience natural childbirth with minimal discomfort.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Syringe,
    title: "IUI Treatment",
    description: "Intrauterine insemination for treating infertility due to oligospermia and mild endometriosis.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MonitorPlay,
    title: "Hysteroscopy",
    description: "Diagnostic procedure to examine the uterus and identify causes of infertility and abnormal bleeding.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-gradient">Fertility</span> Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            World-class treatments and compassionate care to help you on your journey to parenthood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-elevated transition-all duration-300 border-border/50 gradient-card">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto text-primary font-medium">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
