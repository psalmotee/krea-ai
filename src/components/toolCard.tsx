import {
  Brush,
  CircleGauge,
  DraftingCompass,
  Flashlight,
  Image,
  PaintBucket,
  PersonStanding,
  Video,
} from "lucide-react";

const generateTools = [
  {
    title: "Image",
    description: "Generate images with custom styles, prompts and categories",
    icon: <Image className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-blue-500",
  },
  {
    title: "Video",
    description: "Generate videos with Music, Flow, Harmony, LUTs and more",
    icon: <Video className="w-4 h-4 text-white" />,
    buttonText: "Open",
    iconBg: "bg-yellow-500",
  },
  {
    title: "Realtime",
    description: "Realtime model for images and instant feedback loops",
    icon: <Brush className="w-4 h-4 text-white" />,
    buttonText: "Open",
    iconBg: "bg-cyan-500",
  },
  {
    title: "Enhancer",
    description: "Enhance and resize images and videos up to 2K/4K",
    icon: <PaintBucket className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-gray-800",
  },
  {
    title: "Edit",
    description: "AI-powered editor for style, aspect ratio and integration",
    icon: <DraftingCompass className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-purple-500",
  },
  {
    title: "Video Layer",
    description: "Edit layers in video with key audio sync",
    icon: <Flashlight className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-indigo-500",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    icon: <PersonStanding className="w-4 h-4 text-white" />,
    badge: "New",
    buttonText: "Open",
    iconBg: "bg-black",
  },
  {
    title: "Train",
    description: "Train models by supplying your style, products, or datasets",
    icon: <CircleGauge className="w-4 h-4 text-white" />,
    buttonText: "Open",
    iconBg: "bg-orange-500",
  },
];

function Generate() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-base-content">Generate</h2>

        <button className="text-sm text-blue-600 hover:underline">
          Show all
        </button>
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
                    <span className="text-[10px] font-semibold bg-blue-600 text-base-100 px-1.5 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{tool.description}</p>
              </div>
            </div>

            {/* Right: button */}
            <button className="ml-4 text-xs inline-flex items-center justify-center rounded-full bg-base-content/5 px-2 py-1 font-medium text-black shadow-md hover:bg-white">
              {tool.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Generate;
