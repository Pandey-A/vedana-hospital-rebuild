import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul & Priya M.",
    text: "I can never repay the debt of Dr. Sangeeta Tajpuriya. I had already stopped treatment but she told me not to give up. She has amazing convincing powers! She convinced me to continue with the treatment and I am glad I listened to her. I am forever grateful to her for turning mine and my wife's dream into reality.",
    rating: 5,
  },
  {
    name: "Amit & Sunita K.",
    text: "The kind of care and attention we got from Dr. Sangeeta Tajpuriya, we had never experienced before. Our treatment went on for 3 years. We followed her every suggestion and advice. One thing that I really like about her is that she doesn't give too many medicines, only what is necessary. In 2016 we conceived and this year we have had a beautiful, healthy baby. Dr. Tajpuriya is a Godsend for us.",
    rating: 5,
  },
  {
    name: "Vikram & Meera S.",
    text: "After years of trying, we finally found hope at Vedansha Hospital. The entire team was incredibly supportive throughout our IVF journey. Today, we are blessed with twins. The hospital truly makes your hopes and dreams come true.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stories of <span className="text-gradient">Hope & Joy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the families whose dreams we've helped turn into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full gradient-card border-border/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Happy Parents</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
