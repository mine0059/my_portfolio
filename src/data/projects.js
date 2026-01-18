// Centralized projects data for Featured and All Projects

// Featured projects imports
import strag1 from "../assets/strag_1.jpeg";
import strag2 from "../assets/strag_2.jpeg";
import strag3 from "../assets/strag_3.jpeg";
import strag4 from "../assets/strag_4.jpeg";

import whatsapp1 from "../assets/whatsapp_1.jpeg";
import whatsapp2 from "../assets/whatsapp_2.jpeg";
import whatsapp3 from "../assets/whatsapp_3.jpeg";
import whatsapp4 from "../assets/whatsapp_4.jpeg";

import agent1 from "../assets/agent_1.png";
import agent2 from "../assets/agent_2.png";
import agent3 from "../assets/agent_3.png";
import agent4 from "../assets/agent_4.png";
import agent01 from "../assets/agent_01.jpeg";
import agent02 from "../assets/agent_02.jpeg";
import agent03 from "../assets/agent_03.jpeg";

// Additional assets (optional placeholders for all projects)
import auth1 from "../assets/auth_sdk_1.jpeg";
import auth2 from "../assets/auth_sdk_2.jpeg";
import auth3 from "../assets/auth_sdk_3.jpeg";

import store1 from "../assets/store_1.jpeg";
import store2 from "../assets/store_2.jpeg";
import store3 from "../assets/store_3.jpeg";
import store4 from "../assets/store_4.jpeg";

import wallet0 from "../assets/wallet_0.jpeg";
import wallet1 from "../assets/wallet_1.jpeg";
import wallet2 from "../assets/wallet_2.jpeg";
import wallet3 from "../assets/wallet_3.jpeg";

import quiz1 from "../assets/quiz_1.jpeg";
import quiz2 from "../assets/quiz_2.jpeg";
import quiz3 from "../assets/quiz_3.jpeg";


import { Import } from "lucide-react";

export const featuredProjects = [
  {
    key: "strag",
    projectname: "Strag - Mobile App",
    projectdescription:
      "Cross-platform mobile app. Includes onboarding, messaging, and responsive UI tuned for mobile viewport sizes.",
    images: [
      { src: strag1, alt: "Strag screen 1" },
      { src: strag2, alt: "Strag screen 2" },
      { src: strag3, alt: "Strag screen 3" },
      { src: strag4, alt: "Strag screen 4" },
    ],
    tools: ["Flutter", "Dart", "Bloc", "Clean Architecture"],
    demoLink: undefined,
    githubLink: undefined,
  },
  {
    key: "whatsapp",
    projectname: "WhatsApp UI Clone",
    projectdescription:
      "A polished mobile UI clone focusing on chat flows, stories, and dark mode. Built to match native feel and performance. This app used firebase database for real-time chat functionality, authentication and user management, also uses a custom backend built with node.js and express to handle media uploads and storage using cloudinary.",
    images: [
      { src: whatsapp1, alt: "WhatsApp UI 1" },
      { src: whatsapp2, alt: "WhatsApp UI 2" },
      { src: whatsapp3, alt: "WhatsApp UI 3" },
      { src: whatsapp4, alt: "WhatsApp UI 4" },
    ],
    tools: ["Flutter", "Dart", "Bloc", "Clean Architecture", "Firebase", "Node.js", "Express", "Cloudinary"],
    demoLink: undefined,
    githubLink: undefined,
  },
  {
    key: "agent",
    projectname: "Agent Dashboard",
    projectdescription:
      "Agent-focused mobile UI showcasing listings, filtering, and profile flows. Emphasis on accessibility and smooth interactions.",
    images: [
      { src: agent1, alt: "Agent screen 1" },
      { src: agent2, alt: "Agent screen 2" },
      { src: agent01, alt: "Agent screen 01" },
      { src: agent02, alt: "Agent screen 02" },
      { src: agent03, alt: "Agent screen 03" },
      { src: agent3, alt: "Agent screen 3" },
      { src: agent4, alt: "Agent screen 4" },
    ],
    tools: ["Flutter", "Dart", "Riverpod", "MVVM", ],
    demoLink: undefined,
    githubLink: undefined,
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    key: "authsdk",
    projectname: "Auth SDK",
    projectdescription:
      "Auth sdk provides a complete authentication solution with supporting Email/Paassword, Google Sign-In/Up, it has Dual modes: pre-build Ui Widgets and headless mode for complete customization, state management Flexibility: Use with Bloc, Provider, Riverpod, GetX, or plain setState, Custom Error exception and Stream based.",
    images: [
      { src: auth1, alt: "Auth screen 1" },
      { src: auth2, alt: "Auth screen 2" },
      { src: auth3, alt: "Auth screen 3" },
    ],
    tools: ["Flutter", "Dart", "Firebase Auth", "Bloc", "State Management"],
    demoLink: undefined,
    githubLink: undefined,
  },
  {
    key: "store",
    projectname: "StoreKeeper",
    projectdescription:
      "An Offline-first store management app with advanced local database implementation using SQLite, Perfrom basic CRUD operations, uses native camera and upload from gallery to capture product images, generate sales reports, and manage inventory efficiently.",
    images: [
      { src: store1, alt: "Store screen 1" },
      { src: store2, alt: "Store screen 2" },
      { src: store3, alt: "Store screen 3" },
      { src: store4, alt: "Store screen 4" },
    ],
    tools: ["Flutter", "Dart", "SQLite", "Camera Integration"],
    demoLink: undefined,
    githubLink: undefined,
  },
  {
    key: "wallet",
    projectname: "Crypto Wallet App",
    projectdescription:
      "A mobile wallet interface with transaction history, analytics, and secure auth flows.",
    images: [
      { src: wallet0, alt: "Wallet screen 1" },
      { src: wallet1, alt: "Wallet screen 2" },
      { src: wallet2, alt: "Wallet screen 3" },
      { src: wallet3, alt: "Wallet screen 4" },
    ],
    tools: ["Flutter", "Dart", "Chart_sparkline", "Hive"],
    demoLink: undefined,
    githubLink: undefined,
  },
  {
    key: "quiz",
    projectname: "Quiz App",
    projectdescription:
      "A lightweight quiz experience with scoring, progress, and local persistence.",
    images: [
      { src: quiz1, alt: "Quiz screen 1" },
      { src: quiz2, alt: "Quiz screen 2" },
      { src: quiz3, alt: "Quiz screen 3" },
    ],
    tools: ["Flutter", "Dart", "State Management",],
    demoLink: undefined,
    githubLink: undefined,
  },
];
