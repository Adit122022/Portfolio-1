type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aditya Sharma | Portfolio",
    fullName: "Aditya Sharma",
    email: "adity122022@gmail.com",
  },
  hero: {
    name: "Aditya Sharma",
    p: [
      "Full-Stack Developer skilled in the MERN stack",
      "Passionate about building clean UIs and solving real-world problems with code",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a passionate Full-Stack Developer with experience in JavaScript, TypeScript, and the MERN stack. I’ve built projects like Stackwave (a Stack Overflow clone with AI), Clarity AI (an image enhancer), and Annova (a real-time chat app). I enjoy crafting user-friendly frontends and solving real-world problems through code. Let's build something amazing together.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Projects & Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Explore my projects that demonstrate my expertise in building scalable full-stack applications. From AI-powered tools to real-time chat apps, my work reflects a commitment to clean code, problem solving, and delivering impactful user experiences.`,
    },
  },
};
