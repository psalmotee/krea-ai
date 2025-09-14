import { ToolCard } from "./ui/card";

const generateTools = [
  {
    title: "Studio",
    description:
      "Real-time image and video generation with complete creative control",
    icon: "🎨",
    badge: "NEW",
    buttonText: "Open",
    iconBg: "icon-bg-blue",
  },
  {
    title: "Upscale",
    description:
      "Enhance image resolution and quality using advanced AI algorithms",
    icon: "⬆️",
    buttonText: "Open",
    iconBg: "icon-bg-green",
  },
  {
    title: "RealTime",
    description: "Generate images and videos in real-time with instant preview",
    icon: "⚡",
    badge: "BETA",
    buttonText: "Open",
    iconBg: "icon-bg-yellow",
  },
  {
    title: "Video Layer",
    description: "Advanced video generation and editing capabilities",
    icon: "🎬",
    badge: "NEW",
    buttonText: "Open",
    iconBg: "icon-bg-purple",
  },
  {
    title: "Enhancer",
    description: "Enhance and improve existing images with AI-powered tools",
    icon: "✨",
    badge: "BETA",
    buttonText: "Open",
    iconBg: "icon-bg-pink",
  },
  {
    title: "Video Transfer",
    description:
      "Transfer styles and apply effects to video content seamlessly",
    icon: "🔄",
    badge: "NEW",
    buttonText: "Open",
    iconBg: "icon-bg-indigo",
  },
  {
    title: "Train",
    description:
      "Train custom AI models with your own datasets and preferences",
    icon: "🧠",
    buttonText: "Open",
    iconBg: "icon-bg-orange",
  },
];

function Generate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {generateTools.map((tool, i) => (
        <ToolCard key={i} {...tool} />
      ))}
    </div>
  );
}

export default Generate;