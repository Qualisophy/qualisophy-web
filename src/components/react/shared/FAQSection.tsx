import { useState } from "react";
import {
  ChevronDown,
  Clock,
  Award,
  CheckCircle2,
  CreditCard,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Brain,
  Users,
  Handshake,
  Scale,
  TrendingUp,
  Settings,
  Activity,
  Globe,
  FileCheck,
  Link,
  PiggyBank,
  RefreshCcw,
  Rocket,
  UserCheck,
  HeartHandshake,
  LifeBuoy,
  Map,
  Laptop,
  Home,
  WifiOff,
  Landmark,
} from "lucide-react";
import { ProgramCTA } from "@/components/react/programs/ProgramCTA";

interface FAQ {
  question: string;
  answer: string;
  icon: any;
  popular?: boolean;
}

interface FAQSectionProps {
  alwaysExpanded?: boolean;
}

export const FAQSection = ({ alwaysExpanded = false }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(
    alwaysExpanded ? "0-0" : null,
  );

  const faqData = [
    {
      title: "Neurodivergencia",
      faqs: [
        {
          question: "¿Qué es un programa de inclusión laboral para personas con autismo?",
          answer:
          "Es un programa diseñado para facilitar el acceso al empleo de personas neurodivergentes mediante formación adaptada, acompañamiento especializado y conexión directa con empresas. Combina capacitación técnica con experiencia real para garantizar una inserción laboral sostenible.",
          icon: Brain,
          popular: true,
        },
        {
          question: "¿Qué perfiles neurodivergentes pueden acceder al programa?",
          answer:
          "El programa está dirigido principalmente a personas con autismo y TDAH, aunque puede adaptarse a otros perfiles neurodivergentes. Se evalúan capacidades, intereses y necesidades de apoyo para diseñar un itinerario personalizado.",
          icon: Users,
        },
        {
          question: "¿Cómo funciona la formación dual en este programa?",
          answer:
          "La formación dual combina aprendizaje teórico adaptado con experiencia práctica en empresas. Esto permite una adaptación progresiva al entorno laboral y reduce la incertidumbre tanto para el candidato como para la empresa.",
          icon: GraduationCap,
          popular: true,
        },
        {
          question: "¿Qué es el empleo con apoyo?",
          answer:
          "Es un modelo de inserción laboral en el que el candidato recibe acompañamiento continuo por parte de profesionales especializados, tanto durante la incorporación como en su desarrollo dentro de la empresa.",
          icon: Handshake,
        },
        {
          question: "¿Cómo ayuda este programa a las empresas a cumplir la LGD?",
          answer:
          "El programa facilita la contratación de personas con discapacidad ayudando a las empresas a cumplir la cuota legal del 2%, además de ofrecer asesoramiento, adaptación de puestos y seguimiento continuo.",
          icon: Scale,
        },
        {
          question: "¿Qué beneficios tiene contratar talento neurodivergente?",
          answer:
          "Las empresas obtienen perfiles con alta concentración, pensamiento lógico y atención al detalle, además de mejorar su innovación, diversidad y cumplimiento de criterios ESG.",
          icon: TrendingUp,
        },
        {
          question: "¿Se adapta el puesto de trabajo a la persona?",
          answer:
          "Sí, se realizan adaptaciones técnicas y organizativas del puesto para maximizar el rendimiento del talento y asegurar una integración efectiva.",
          icon: Settings,
        },
        {
          question: "¿Qué tipo de seguimiento se realiza tras la contratación?",
          answer:
          "Se ofrece acompañamiento continuo tanto al trabajador como a la empresa, ajustando el entorno laboral y resolviendo posibles dificultades para garantizar la estabilidad.",
          icon: Activity,
        },
      ],
    },
    {
      title: "Entorno Rural",
      faqs: [
        {
          question: "¿Qué es el programa de talento rural tecnológico?",
          answer:
            "Es un programa que conecta a profesionales de zonas rurales con oportunidades digitales mediante formación tecnológica y acceso a empleo remoto o híbrido.",
          icon: Map,
          popular: true,
        },
        {
          question: "¿Puedo trabajar en tecnología sin salir de mi pueblo?",
          answer:
            "Sí, el programa está diseñado para facilitar el acceso a empleos digitales que pueden desarrollarse en remoto, evitando la necesidad de migrar a grandes ciudades.",
          icon: Laptop,
        },
        {
          question: "¿Qué formación se ofrece en zonas rurales?",
          answer:
            "Se ofrecen programas de capacitación tecnológica adaptados al mercado laboral, incluyendo especializaciones digitales y prácticas en empresas.",
          icon: GraduationCap,
        },
        {
          question: "¿Cómo ayuda el programa a reducir la despoblación?",
          answer:
            "Generando oportunidades laborales en el entorno rural, fijando población y fomentando el desarrollo económico local.",
          icon: Home,
        },
        {
          question: "¿Qué ventajas tiene contratar talento rural?",
          answer:
            "Las empresas acceden a profesionales cualificados, reducen costes y diversifican sus equipos con talento fuera de entornos urbanos.",
          icon: TrendingUp,
        },
        {
          question: "¿El programa ayuda con la brecha digital?",
          answer:
            "Sí, incluye formación, acceso a herramientas digitales y apoyo para superar limitaciones tecnológicas.",
          icon: WifiOff,
        },
        {
          question: "¿Existen ayudas para empresas en zonas rurales?",
          answer:
            "Sí, hay subvenciones públicas y programas que pueden financiar hasta un alto porcentaje de proyectos en entornos rurales.",
          icon: Landmark,
        },
      ],
    },
    {
      title: "Talento Migrante",
      faqs: [
        {
          question: "¿Qué es un programa de integración laboral para talento migrante?",
          answer:
            "Es un servicio que facilita la incorporación de profesionales extranjeros al mercado laboral español mediante formación puente, asesoramiento legal y conexión con empresas.",
          icon: Globe,
          popular: true,
        },
        {
          question: "¿Cómo homologar un título extranjero en España?",
          answer:
            "El proceso de homologación requiere presentar la titulación, documentación académica y cumplir los requisitos del Ministerio de Educación. El programa te guía para acelerar este proceso y reducir errores.",
          icon: FileCheck,
        },
        {
          question: "¿Se puede trabajar sin tener el título homologado?",
          answer:
            "Sí, dependiendo del sector. Muchos profesionales pueden acceder a empleos mientras completan la homologación, especialmente en áreas tecnológicas o digitales.",
          icon: Briefcase,
        },
        {
          question: "¿Qué es la formación puente?",
          answer:
            "Es un proceso de adaptación que conecta el conocimiento adquirido en el país de origen con las herramientas, normativa y cultura laboral del mercado español.",
          icon: Link,
          popular: true,
        },
        {
          question: "¿Qué beneficios tiene contratar talento migrante?",
          answer:
            "Las empresas acceden a perfiles cualificados, diversidad cultural, nuevas perspectivas y capacidad de expansión a mercados internacionales.",
          icon: TrendingUp,
        },
        {
          question: "¿Existen ayudas para contratar talento extranjero?",
          answer:
            "Sí, existen bonificaciones económicas y ventajas en licitaciones públicas relacionadas con diversidad y criterios ESG.",
          icon: PiggyBank,
        },
        {
          question: "¿Qué es la mediación cultural en el empleo?",
          answer:
            "Es un proceso que facilita la adaptación entre empresa y trabajador, traduciendo diferencias culturales y mejorando la comunicación y expectativas laborales.",
          icon: MessageCircle,
        },
        {
          question: "¿Cómo ayuda el programa a conseguir la primera experiencia laboral en España?",
          answer:
            "A través de prácticas en empresas, networking y validación de competencias, eliminando la barrera de la falta de experiencia local.",
          icon: Users,
        },
      ],
    },
    {
      title: "Riesgo de Exclusión",
      faqs: [
        {
          question: "¿Qué es un programa de inserción laboral para colectivos vulnerables?",
          answer:
            "Es un servicio que facilita el acceso al empleo digno mediante formación, acompañamiento social y conexión con empresas comprometidas.",
          icon: HeartHandshake,
          popular: true,
        },
        {
          question: "¿Quién puede acceder a este programa?",
          answer:
            "Personas en situación de desempleo prolongado, precariedad laboral o riesgo de exclusión social, incluyendo mayores de 45 años o colectivos vulnerables.",
          icon: Users,
        },
        {
          question: "¿Se necesita experiencia previa?",
          answer:
            "No, el programa incluye formación desde niveles básicos, especialmente en competencias digitales y habilidades blandas.",
          icon: GraduationCap,
        },
        {
          question: "¿Qué tipo de apoyo se ofrece?",
          answer:
            "Se proporciona acompañamiento social, psicológico y laboral para garantizar estabilidad personal y profesional.",
          icon: LifeBuoy,
        },
        {
          question: "¿Qué beneficios tiene contratar estos perfiles?",
          answer:
            "Las empresas acceden a bonificaciones económicas, mejoran su RSC y contribuyen a la inclusión social.",
          icon: PiggyBank,
        },
        {
          question: "¿Se realiza seguimiento tras la contratación?",
          answer:
            "Sí, se ofrece seguimiento continuo para evitar abandono laboral y garantizar la estabilidad del empleo.",
          icon: Activity,
        },
        {
          question: "¿Qué impacto tiene el empleo en la inclusión social?",
          answer:
            "El acceso a empleo estable mejora la autonomía, reduce la dependencia de ayudas y favorece la integración social.",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Reconversión Laboral",
      faqs: [
        {
          question: "¿Los cursos son en vivo o grabados?",
          answer:
            "Todos nuestros cursos son EN VIVO con instructores certificados. Tendrás sesiones interactivas donde podrás hacer preguntas en tiempo real. Además, todas las clases quedan grabadas y disponibles durante 6 meses para que puedas repasarlas cuando quieras.",
          icon: Clock,
          popular: true,
        },
        {
          question: "¿Obtengo certificación al finalizar?",
          answer:
            "Sí, al completar el curso recibes un certificado oficial reconocido por empresas tech. Además, el programa incluye proyectos prácticos que podrás añadir a tu portfolio profesional.",
          icon: Award,
          popular: true,
        },
        {
          question: "¿Qué pasa si no puedo asistir a una clase en vivo?",
          answer:
            "No te preocupes. Todas las sesiones quedan grabadas y las tienes disponibles en menos de 24 horas. También ofrecemos tutorías de recuperación semanales sin coste adicional para resolver dudas.",
          icon: CheckCircle2,
        },
        {
          question: "¿Ofrecen facilidades de pago?",
          answer:
            "Sí, ofrecemos planes de pago a plazos sin intereses. También tenemos descuentos por pronto pago (hasta 20% OFF) y packs para empresas con condiciones especiales.",
          icon: CreditCard,
        },
        {
          question: "¿El curso incluye prácticas en empresas?",
          answer:
            "Nuestros cursos incluyen proyectos basados en casos reales de empresas. Además, tenemos un programa de partnerships donde conectamos a nuestros mejores alumnos con empresas que buscan talento tech.",
          icon: Briefcase,
          popular: true,
        },
        {
          question: "¿Necesito conocimientos previos?",
          answer:
            "Depende del curso. Los cursos de nivel básico no requieren experiencia previa. Para cursos avanzados, te indicamos los requisitos específicos en la página de cada curso. Si tienes dudas, contáctanos y te asesoramos.",
          icon: GraduationCap,
        },

        {
          question: "¿Qué es la reconversión laboral en tecnología?",
          answer:
            "Es el proceso de adquirir nuevas competencias digitales para cambiar de sector profesional y acceder a empleos tecnológicos con alta demanda.",
          icon: RefreshCcw,
          popular: true,
        },
        {
          question: "¿Puedo cambiar al sector tecnológico sin experiencia previa?",
          answer:
            "Sí, el programa está diseñado para partir de tus habilidades actuales y transformarlas en competencias digitales mediante formación práctica y acompañamiento.",
          icon: Rocket,
        },
        {
          question: "¿Qué salidas laborales tiene el programa?",
          answer:
            "Podrás acceder a roles como Data Analyst, QA Tester, Digital Marketing o IT Project Manager, entre otros perfiles tecnológicos.",
          icon: Briefcase,
        },
        {
          question: "¿Incluye mentoring personalizado?",
          answer:
            "Sí, tendrás sesiones individuales con mentores expertos que te guiarán durante todo el proceso de transición profesional.",
          icon: UserCheck,
        },
        {
          question: "¿Se ayuda a encontrar empleo después del curso?",
          answer:
            "Sí, el programa incluye orientación laboral, mejora de CV, preparación de entrevistas y acceso a oportunidades con empresas.",
          icon: Users,
        },
      ],
    },
  ];

  const toggleFAQ = (id: string) => {
    if (!alwaysExpanded) {
      setOpenIndex(openIndex === id ? null : id);
    }
  };

  return (
    <>
      <section className="pt-24 pb-8 md:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-primary leading-relaxed px-2">
              Resolvemos tus dudas antes de que nos contactes. Si no encuentras
              lo que buscas, estamos a un clic de distancia.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>
                  <span className="font-bold text-secondary">500+</span>{" "}
                  consultas resueltas
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700">
                <Clock className="w-5 h-5 text-primary" />
                <span>
                  Respuesta en{" "}
                  <span className="font-bold text-secondary">&lt;24h</span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-12 md:space-y-12">
            {faqData.map((service, serviceIndex) => (
              <div key={serviceIndex} className="flex flex-col">
                <div className="min-h-[32px]">
                  <h3 className="text-2xl font-bold font-heading text-secondary text-center">
                    {service.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => {
                    const currentId = `${serviceIndex}-${index}`;
                    const IconComponent = faq.icon;
                    const isOpen = openIndex === currentId;

                    return (
                      <div
                        key={index}
                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? "border-primary/30 bg-gray-50/50 shadow-sm"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        <button
                          onClick={() => toggleFAQ(currentId)}
                          className={`w-full text-left px-4 py-3 md:px-8 md:py-0 flex items-center justify-between gap-4 transition-all duration-300 overflow-hidden ${
                            !isOpen ? "md:h-[64px]" : "py-6 md:py-8"
                          }`}
                        >
                          <div className="flex flex-row items-center gap-3 md:gap-4 flex-1 min-w-0">
                            <div
                              className={`flex-shrink-0 p-2 rounded-lg transition-colors duration-300 ${
                                isOpen
                                  ? "bg-primary text-white"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            
                            <div className="flex flex-1 items-center justify-between min-w-0 gap-3 w-full">
                              <span className="font-bold text-sm md:text-lg text-secondary md:truncate whitespace-normal leading-tight text-left w-full">
                                {faq.question}
                              </span>
                              {faq.popular && (
                                <span className="hidden md:flex flex-shrink-0 bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                                  Popular
                                </span>
                              )}
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 ml-0 md:ml-[68px]">
                              <p className="text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-6 text-left">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramCTA
        variant="white"
        title="¿No encuentras tu respuesta?"
        description="Nuestro equipo de orientación está listo para ayudarte. Contacta con nosotros y te responderemos en menos de 24 horas."
        buttons={[
          {
            label: "Ir a Contacto",
            href: "/contact",
            variant: "solid",
          },
          {
            label: "Ver Formaciones",
            href: "/cursos",
            variant: "outline",
          },
        ]}
      />
    </>
  );
};