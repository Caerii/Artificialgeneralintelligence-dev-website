import React, { createContext, useContext } from 'react';
import Tile1 from './tile-pages/Tile1';

const TileDataContext = createContext();

// Function to generate tile data
const generateTileData = () => {
  return [
    {
      id: 1,
      title: "Neural Networks",
      content: "The Backbone of Learning",
      details: "Neural networks mimic the human brain's structure and functionality, forming the core of learning and pattern recognition in AGI.",
      component: Tile1,
    },
    {
      id: 2,
      title: "Computational Theory",
      content: "Understanding Computation",
      details: "Exploring theories behind algorithmic processes and computational complexity that underpin AGI operations."
    },
    {
      id: 3,
      title: "Cognitive Architecture",
      content: "Framework for Intelligence",
      details: "Designing systems that model human cognition, blending memory, learning, and decision-making processes."
    },
    {
      id: 4,
      title: "Evolutionary Algorithms",
      content: "Simulated Evolution",
      details: "Using principles of natural selection to generate solutions to optimization and search problems, crucial for adaptive AGI systems."
    },
    {
      id: 5,
      title: "Knowledge Representation",
      content: "Storing What’s Learned",
      details: "Defining how to store data so that a machine can learn from it and make decisions, a cornerstone for intelligent reasoning."
    },
    {
      id: 6,
      title: "Natural Language Processing",
      content: "Communicating with AGI",
      details: "Enabling machines to understand and interact using human language, vital for AGI to effectively operate within human environments."
    },
    {
      id: 7,
      title: "Ethics and Safety",
      content: "Moral Parameters",
      details: "Incorporating ethical considerations and safety measures to ensure AGI operates within acceptable boundaries."
    },
    {
      id: 8,
      title: "Robotics Integration",
      content: "Embodied Cognition",
      details: "Combining AGI with robotics to perform tasks in the physical world, enhancing capabilities and applications."
    },
    {
      id: 9,
      title: "Sensor and Perception",
      content: "Digital Sensing",
      details: "Developing the ability for machines to perceive the world through sensors, analogous to human senses, crucial for real-world interaction."
    },
    {
      id: 10,
      title: "Machine Ethics",
      content: "Moral Machines",
      details: "Programming AGI to understand and adhere to ethical guidelines in decision-making processes."
    },
    {
      id: 11,
      title: "Self-Learning Systems",
      content: "Autonomous Learning",
      details: "Creating systems that can learn and adapt without human intervention, mimicking the autodidactic abilities of humans."
    },
    {
      id: 12,
      title: "Human-Machine Collaboration",
      content: "Synergistic Relationships",
      details: "Designing AGI to complement human efforts, enhancing productivity and creativity through collaboration."
    },
    {
      id: 13,
      title: "Quantum Computing",
      content: "Next-Gen Processing",
      details: "Exploring the potential of quantum mechanics to massively accelerate computation, potentially transforming AGI capabilities."
    },
    {
      id: 14,
      title: "Systems Theory",
      content: "Understanding Complex Systems",
      details: "Applying systems theory to manage and understand the interactions within large-scale AGI systems."
    },
    {
      id: 15,
      title: "Simulated Environments",
      content: "Training Grounds",
      details: "Using virtual realities to train and refine AGI models in diverse scenarios without real-world consequences."
    },
    {
      id: 16,
      title: "Consciousness Modeling",
      content: "The Quest for AGI Sentience",
      details: "Attempting to model elements of human consciousness to create a truly sentient AGI, the ultimate frontier in AI."
    }
  ];
};

const tileData = generateTileData(); // Generate 16 tiles

export const TileDataProvider = ({ children }) => (
  <TileDataContext.Provider value={tileData}>
    {children}
  </TileDataContext.Provider>
);

export const useTileData = () => useContext(TileDataContext);
