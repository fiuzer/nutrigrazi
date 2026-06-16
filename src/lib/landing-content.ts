export type Metric = {
  label: string;
  value: string;
};

export type Pillar = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
};

export type JourneyStep = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const metrics: Metric[] = [
  { value: "+10 anos", label: "Acompanhando pessoas em processos de emagrecimento, rotina e mudança de hábitos." },
  { value: "CRN-3 43973", label: "Nutricionista em São Paulo, Vila Leopoldina, com atendimento online." },
  { value: "Método próprio", label: "Processo estruturado para emagrecer com saúde e sustentar resultados." },
];

export const painSignals: string[] = [
  "Você está usando canetas emagrecedoras ou análogos de GLP-1 e quer proteger massa magra, cabelo e rotina alimentar.",
  "Você emagrece, mas sente medo do efeito rebote quando o medicamento muda ou termina.",
  "O efeito sanfona já tomou energia demais da sua vida.",
  "Você sabe o que fazer, mas não consegue sustentar hábitos por muito tempo.",
  "Sua rotina é corrida e a alimentação acaba ficando para depois.",
  "Você quer emagrecer sem abrir mão de qualidade de vida, preferências e vida social.",
];

export const approachPoints: string[] = [
  "Nutrição com estratégia, sem plano engessado.",
  "Cuidado alimentar durante o uso de medicamentos agonistas GLP-1, sempre em conjunto com acompanhamento médico.",
  "Planejamento para reduzir riscos comuns do emagrecimento, como baixa ingestão proteica e perda de massa magra.",
  "Ferramentas práticas para uma rotina corrida, com filhos, trabalho e vida social.",
  "Acompanhamento contínuo para ajustar o plano conforme sua resposta, fome, sintomas e rotina.",
];

export const pillars: Pillar[] = [
  {
    id: "01",
    title: "Investigação metabólica",
    description:
      "Mapeamos histórico, rotina, composição corporal, exames, sintomas e resposta ao emagrecimento para entender o que precisa ser ajustado.",
    highlights: ["Histórico alimentar", "Exames e sintomas", "Composição corporal"],
  },
  {
    id: "02",
    title: "Reprogramação alimentar",
    description:
      "Construímos uma alimentação alinhada às suas preferências, aos seus hábitos e ao seu objetivo, sem depender de restrição extrema.",
    highlights: ["Plano personalizado", "Proteína e saciedade", "Flexibilidade alimentar"],
  },
  {
    id: "03",
    title: "Rotina prática",
    description:
      "Organizamos refeições, compras, escolhas fora de casa e estratégias de adesão para que o plano funcione na vida real.",
    highlights: ["Planejamento semanal", "Refeições possíveis", "Estratégia para imprevistos"],
  },
  {
    id: "04",
    title: "Acompanhamento contínuo",
    description:
      "Ajustamos o processo ao longo do caminho para preservar resultados, lidar com efeito sanfona e consolidar hábitos no longo prazo.",
    highlights: ["Ajustes de rota", "Prevenção de rebote", "Sustentação de hábitos"],
  },
];

export const differentiators: string[] = [
  "Não trabalho com dieta restritiva nem promessa milagrosa.",
  "Cada estratégia nasce da sua história, rotina e resposta metabólica.",
  "Você entende o porquê das escolhas e ganha autonomia para manter o resultado.",
];

export const idealFor: string[] = [
  "se você usa canetas emagrecedoras ou outro medicamento agonista GLP-1 com orientação médica.",
  "se você já tentou muitas dietas e continua presa ao efeito sanfona.",
  "se você quer emagrecer com qualidade de vida, sem perder massa magra e sem viver de restrição.",
  "se você busca uma rotina alimentar possível para trabalho, família, filhos e vida social.",
  "se você valoriza acolhimento, escuta sem julgamento e orientação prática.",
];

export const notIdealFor: string[] = [
  "se você busca fórmula rápida ou promessa milagrosa.",
  "se você quer um cardápio rígido sem olhar para rotina, sintomas e adesão.",
  "se você não pretende participar ativamente das mudanças.",
  "se você espera perfeição imediata em vez de construção progressiva.",
];

export const journey: JourneyStep[] = [
  {
    title: "Avaliação inicial",
    description:
      "Entendemos sua história, rotina, objetivos, uso de medicamentos, exames, sintomas e dificuldades para manter hábitos.",
  },
  {
    title: "Investigação metabólica",
    description:
      "Mapeamos sinais de fome, saciedade, ingestão proteica, composição corporal e pontos que podem travar sua evolução.",
  },
  {
    title: "Estratégia alimentar",
    description:
      "Criamos um plano alinhado ao seu metabolismo, preferências, rotina e necessidades durante o emagrecimento.",
  },
  {
    title: "Rotina prática",
    description:
      "Transformamos a estratégia em refeições, compras, escolhas fora de casa e soluções para semanas corridas.",
  },
  {
    title: "Construção de hábitos",
    description:
      "Trabalhamos consistência no longo prazo para reduzir efeito sanfona e dependência de motivação alta.",
  },
  {
    title: "Suporte e ajustes",
    description:
      "Revisamos avanços, sintomas, desafios e adaptamos o plano continuamente para manter segurança e adesão.",
  },
];

export const expectedResults: string[] = [
  "Emagrecimento com mais qualidade de vida.",
  "Mais proteção de massa magra durante o processo.",
  "Rotina alimentar possível, mesmo em semanas corridas.",
  "Mais clareza para lidar com fome, saciedade e escolhas.",
  "Menos risco de voltar ao ciclo do efeito sanfona.",
  "Hábitos sustentáveis, sem depender de motivação alta.",
];

export const testimonials = [
  {
    quote:
      "Pela primeira vez, eu parei de começar dieta toda segunda-feira. Hoje eu tenho estratégia e tranquilidade para seguir minha rotina.",
    author: "Paciente, 34 anos",
    context: "Acompanhamento em emagrecimento e efeito sanfona",
  },
  {
    quote:
      "Não foi sobre proibição. Foi sobre entender minha rotina e construir uma alimentação possível. Meu corpo respondeu junto com meus hábitos.",
    author: "Paciente, 29 anos",
    context: "Processo de efeito sanfona e reconstrução de hábitos",
  },
  {
    quote:
      "Eu achava que era falta de força de vontade. Descobri que era falta de método e acompanhamento. Me sinto no controle sem rigidez.",
    author: "Paciente, 41 anos",
    context: "Reeducação alimentar com rotina prática",
  },
];

export const faqs: Faq[] = [
  {
    question: "O acompanhamento é para quem usa canetas emagrecedoras?",
    answer:
      "Sim. O atendimento pode ajudar pessoas em uso de medicamentos agonistas GLP-1 (canetas emagrecedoras), desde que o uso seja acompanhado por médico. A nutrição entra para melhorar adesão, ingestão proteica, rotina alimentar e manutenção de resultados.",
  },
  {
    question: "Eu recebo um plano alimentar pronto?",
    answer:
      "Você recebe direcionamento nutricional personalizado, mas sem modelo engessado. O foco é construir escolhas sustentáveis para sua rotina, preferências, sintomas e objetivo.",
  },
  {
    question: "Atende online ou presencial?",
    answer:
      "O acompanhamento pode acontecer online, com a mesma profundidade estratégica e acolhimento. Se houver agenda presencial, isso pode ser combinado conforme disponibilidade.",
  },
  {
    question: "Quanto tempo leva para perceber resultados?",
    answer:
      "Depende do ponto de partida, rotina, exames, adesão e estratégia. Os primeiros ganhos costumam aparecer nas primeiras semanas, como mais organização alimentar, saciedade e clareza. Resultados sólidos acontecem com consistência e acompanhamento.",
  },
  {
    question: "Preciso cortar alimentos para começar?",
    answer:
      "Não. O método evita proibições extremas. Trabalhamos escolhas, quantidades, proteínas, fibras, prazer alimentar e planejamento para que a rotina seja possível de sustentar.",
  },
  {
    question: "Como funciona o suporte durante o processo?",
    answer:
      "Você conta com acompanhamento contínuo, ajustes de rota e ferramentas práticas entre consultas para manter a evolução mesmo em semanas corridas.",
  },
  {
    question: "Esse processo ajuda no emagrecimento?",
    answer:
      "Sim. O foco é emagrecimento com qualidade de vida, preservação de massa magra, rotina alimentar realista e construção de hábitos para reduzir efeito sanfona.",
  },
];
