import {
  Brush,
  CircleGauge,
  DraftingCompass,
  Flashlight,
  Image,
  PaintBucket,
  PersonStanding,
  Video,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Button from "./ui/Button";

const generateTools = [
  {
    title: "Image",
    description: "Generate images with custom styles, prompts and categories",
    icon: <Image className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-gradient-to-br from-[#506980] to-[#bfcfde]",
  },
  {
    title: "Video",
    description: "Generate videos with Music, Flow, Harmony, LUTs and more",
    icon: <Video className="w-4 h-4 text-white" />,
    buttonText: "Open",
    iconBg: "bg-[#f3ac18]",
  },
  {
    title: "Realtime",
    description: "Realtime model for images and instant feedback loops",
    icon: <Brush className="w-4 h-4 text-white" />,
    buttonText: "Open",
    iconBg: "bg-gradient-to-br from-[#35b0f2] to-[#aceafe]",
  },
  {
    title: "Enhancer",
    description: "Enhance and resize images and videos up to 2K/4K",
    icon: <PaintBucket className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-gradient-to-br from-[#1c1c1c] to-[#676767]",
  },
  {
    title: "Edit",
    description: "AI-powered editor for style, aspect ratio and integration",
    icon: <DraftingCompass className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-gradient-to-br from-[#3a1d5e] to-[#9c82ba]",
  },
  {
    title: "Video Lipsync",
    description: "Create talking head videos from text or audio input",
    icon: <Flashlight className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-gradient-to-br from-[#2f524b] to-[#98b294]",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    icon: <PersonStanding className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-[#191d1c]",
  },
  {
    title: "Train",
    description: "Train models by supplying your style, products, or datasets",
    icon: <CircleGauge className="w-4 h-4 text-white" />,
    buttonText: "Open",
    iconBg: "bg-[#98b294]",
  },
];

function Generate() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-base-content">Generate</h2>

        <Link
          href="/#"
          className="flex justify-center items-center text-sm text-blue-600 hover:underline"
        >
          <span>
            <ChevronDown className="w-4 h-4 text-blue-600" />
          </span>
          Show all
        </Link>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {generateTools.map((tool) => (
          <div
            key={tool.title}
            className="flex items-center justify-between px-4 py-3"
          >
            {/* Left: icon + text */}
            <div className="flex justify-center items-center gap-3">
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-14 h-8 rounded-lg ${tool.iconBg}`}
              >
                {tool.icon}
              </div>
              {/* Text */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">{tool.title}</h3>
                  {tool.badge && (
                    <span className="text-[10px] font-semibold bg-[#216ef4] text-base-100 px-1.5 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-base-content/70">
                  {tool.description}
                </p>
              </div>
            </div>

            {/* Right: button */}
            <Button variant="secondary"
              ariaLabel={tool.buttonText}>
              {tool.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Generate;
