import { motion } from "framer-motion";
import img1 from "@/assets/services/PAINLESS-CHILDBIRTH.png";
import img2 from "@/assets/services/INTRAUTERINE_INSEMINATION.png";
import img3 from "@/assets/services/Hysteroscopy-1.jpeg";
import img4 from "@/assets/services/PATHOLOGY.png";
import img5 from "@/assets/services/IN-VITRO-FERTILISATION.png";
import img6 from "@/assets/services/ICSI-3.jpeg";
import img7 from "@/assets/services/LAPAROSCOPY.png";
import img8 from "@/assets/services/SONOGRAPHY.jpeg";

const services = [
  {
    image: img1,
    title: "Painless Childbirth",
    text: `Motherhood is inarguably the most beautiful phase in a woman's life. Epidural anaesthesia allows mothers to have a painless delivery the natural way. It is the most popular method of pain relief during labour.`,
  },
  {
    image: img2,
    title: "Intrauterine Insemination",
    text: `Intrauterine insemination is also called artificial insemination. This procedure can be an effective treatment for infertility in women due to causes such as oligospermia, mild to moderate endometriosis and unexplained infertility.`,
  },
  {
    image: img3,
    title: "Hysteroscopy",
    text: `Hysteroscopy is a procedure that allows doctors to check a patient's uterus in order to diagnose causes of infertility & abnormal bleeding.`,
  },
  {
    image: img4,
    title: "Pathology",
    text: `Pathology helps diagnose disease by examining tissues, organs, bodily fluids and biopsies in order to study and diagnose disease.`,
  },
  {
    image: img5,
    title: "In-Vitro Fertilisation",
    text: `IVF is the original 'test-tube' baby technique. It was developed more than 40 years ago for the treatment of women with damaged Fallopian tubes.`,
  },
  {
    image: img6,
    title: "Intra-cytoplasmic Sperm Injection",
    text: `Intra-cytoplasmic sperm injection is a type of IVF procedure in which a single sperm is injected directly into an egg.`,
  },
  {
    image: img7,
    title: "Laparoscopy",
    text: `Laparoscopic surgery, also called minimally invasive surgery or keyhole surgery, is a modern surgical technique performed through small incisions with the help of a camera.`,
  },
  {
    image: img8,
    title: "Sonography",
    text: `Sonography (medical ultrasound) is used to view internal body structures and monitor growth of a child during pregnancy.`,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          {/* <p className="text-sm text-muted-foreground">The best reference</p> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            OUR <span className="text-pink-600">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white rounded-lg overflow-hidden  "
            >
              <div className="relative">
                <img src={s.image} alt={s.title} className="w-full h-44 object-cover block border border-black rounded-2xl" />
                {/* <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div> */}
              </div>

              <div className="p-6 pt-8">
                <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.text}</p>
                <button className="bg-white inline-block px-4 py-2 border border-gray-200 text-sm font-medium">READ MORE</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

<section id="video-section" className="py-20 md:py-28">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
      Vedansha Hospital – <span className="text-pink-600">Best IVF in Nagpur</span> – Videos and More
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/PXImrU-yLw0"
          title="What is IVF?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/zfxLtBnCfXM"
          title="Menstruation must know"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/S9t0byU90_s"
          title="A new story of Hope"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
</section>
