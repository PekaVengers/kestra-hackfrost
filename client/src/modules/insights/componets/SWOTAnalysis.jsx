import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChartIcon,
  TrendingUpIcon,
  AlertTriangleIcon,
  LightbulbIcon,
  TargetIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";

// type SWOTItem = {
//   id: number;
//   title: string;
//   description: string;
//   effect: string;
//   impact: "high" | "medium" | "low";
//   status: "active" | "monitoring" | "resolved";
//   meaning: string;
//   use: string;
// };

// type SWOTData = {
//   strengths: SWOTItem[];
//   weaknesses: SWOTItem[];
//   opportunities: SWOTItem[];
//   threats: SWOTItem[];
// };

// type Goal = {
//   statement: string;
//   description: string;
//   timeframe: string;
//   progress: number;
//   milestones: { title: string; completed: boolean }[];
// };

const mockData = {
  strengths: [
    {
      id: 1,
      title: "Strong Grasp of Core Programming Concepts",
      description:
        "Solid foundation in HTML, CSS, JavaScript, and backend frameworks",
      effect:
        "Enables quick learning and practical implementation of new tools",
      impact: "high",
      status: "active",
      meaning: "Technical competence",
      use: "Build a strong portfolio and contribute to open-source projects",
    },
    {
      id: 2,
      title: "Passionate about Continuous Learning",
      description:
        "Committed to upskilling with a focus on both frontend and backend",
      effect: "Keeps up with industry trends and tools",
      impact: "high",
      status: "active",
      meaning: "Growth mindset",
      use: "Leverage online courses, bootcamps, and projects for rapid growth",
    },
    {
      id: 3,
      title: "Effective Problem Solver",
      description:
        "Ability to break down complex problems into manageable solutions",
      effect: "Delivers timely and optimized code",
      impact: "medium",
      status: "monitoring",
      meaning: "Analytical thinking",
      use: "Highlight problem-solving ability in interviews and code challenges",
    },
  ],
  weaknesses: [
    {
      id: 1,
      title: "Limited Real-World Experience",
      description: "Only a few personal or academic projects completed",
      effect: "Lacks practical exposure to live environments",
      impact: "high",
      status: "active",
      meaning: "Experience gap",
      use: "Focus on gaining internship or freelance opportunities",
    },
    {
      id: 2,
      title: "Time Management Struggles",
      description: "Difficulty balancing learning with personal commitments",
      effect:
        "Slows down progress on completing key certifications or projects",
      impact: "medium",
      status: "active",
      meaning: "Productivity challenge",
      use: "Create a structured learning plan and set weekly goals",
    },
    {
      id: 3,
      title: "Inconsistent Exposure to Modern Frameworks",
      description:
        "Lacks comprehensive experience with popular frameworks like React or Node.js",
      effect: "May take longer to master cutting-edge technologies",
      impact: "medium",
      status: "monitoring",
      meaning: "Technological gap",
      use: "Dedicate specific time to hands-on practice with these frameworks",
    },
  ],
  opportunities: [
    {
      id: 1,
      title: "Booming Demand for Full Stack Developers in India",
      description:
        "Growing startup ecosystem and demand for versatile developers",
      effect: "Opens up a plethora of job opportunities",
      impact: "high",
      status: "active",
      meaning: "Job market growth",
      use: "Actively apply for internships and job openings in startups and tech firms",
    },
    {
      id: 2,
      title: "Availability of Online Learning Platforms",
      description:
        "High-quality free or affordable courses and coding platforms",
      effect: "Accelerates learning and skill development",
      impact: "medium",
      status: "monitoring",
      meaning: "Accessible education",
      use: "Take advantage of MOOCs and certifications to build skills",
    },
    {
      id: 3,
      title: "Participation in Developer Communities and Hackathons",
      description:
        "Opportunities to network, learn from peers, and solve real-world challenges",
      effect: "Enhances learning and career visibility",
      impact: "high",
      status: "active",
      meaning: "Community engagement",
      use: "Join coding bootcamps, online communities, and hackathons",
    },
  ],
  threats: [
    {
      id: 1,
      title: "High Competition in the Job Market",
      description: "Numerous candidates vying for Full Stack Developer roles",
      effect: "Increases the challenge of standing out",
      impact: "high",
      status: "active",
      meaning: "Competitive landscape",
      use: "Differentiate through a strong portfolio and specialized skills",
    },
    {
      id: 2,
      title: "Fast-changing Technology Landscape",
      description: "Constant updates in languages, frameworks, and tools",
      effect: "Requires continuous learning to stay relevant",
      impact: "medium",
      status: "monitoring",
      meaning: "Skills obsolescence",
      use: "Commit to lifelong learning to keep pace with new technologies",
    },
    {
      id: 3,
      title: "Economic Instability",
      description: "Potential for economic downturn affecting hiring",
      effect: "May lead to fewer job openings and longer job search periods",
      impact: "medium",
      status: "monitoring",
      meaning: "Job market uncertainty",
      use: "Prepare for economic fluctuations by diversifying skills and networking",
    },
  ],
};

const mockGoal = {
  statement: "Become a Full Stack Developer in 6 Months",
  description:
    "Master core full stack technologies, build a portfolio, and secure an entry-level developer position by leveraging hands-on projects and networking.",
  timeframe: "By Q2 2024",
  progress: 45,
  milestones: [
    {
      title: "Complete a React and Node.js certification",
      completed: true,
    },
    { title: "Build and deploy 3 portfolio projects", completed: true },
    {
      title: "Contribute to 2 open-source projects",
      completed: false,
    },
    { title: "Secure an internship or freelance role", completed: false },
    { title: "Master advanced JavaScript concepts", completed: false },
  ],
};

const categoryColors = {
  strengths: "bg-emerald-50 border-emerald-200 text-emerald-700",
  weaknesses: "bg-rose-50 border-rose-200 text-rose-700",
  opportunities: "bg-sky-50 border-sky-200 text-sky-700",
  threats: "bg-amber-50 border-amber-200 text-amber-700",
};

const categoryIcons = {
  strengths: <BarChartIcon className="w-5 h-5" />,
  weaknesses: <AlertTriangleIcon className="w-5 h-5" />,
  opportunities: <LightbulbIcon className="w-5 h-5" />,
  threats: <TrendingUpIcon className="w-5 h-5" />,
};

const impactColors = {
  high: "bg-rose-100 text-rose-800",
  medium: "bg-yellow-100 text-yellow-800",
  low: "bg-green-100 text-green-800",
};

const statusIcons = {
  active: <CheckCircleIcon className="w-4 h-4 text-green-500" />,
  monitoring: <AlertCircleIcon className="w-4 h-4 text-yellow-500" />,
  resolved: <XCircleIcon className="w-4 h-4 text-gray-500" />,
};

export default function SWOTAnalysis() {
  const [data, setData] = useState(null);
  const [goal, setGoal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(mockData);
      setGoal(mockGoal);
      setLoading(false);
    }, 2000);
  }, []);

  const toggleItemExpansion = (category, itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [category]: prev[category]?.includes(itemId)
        ? prev[category].filter((id) => id !== itemId)
        : [...(prev[category] || []), itemId],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center gradient-text head">
          Strategic S.W.O.T Analysis
        </h1>

        {/* Goal Card */}
        <Card className="bg-white shadow-lg ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl bold">Strategic Goal</CardTitle>
            <TargetIcon className="w-8 h-8 text-blue-500" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-32 w-full" />
            ) : (
              <>
                <h3 className="text-xl font-semibold text-gray-800">
                  {goal?.statement}
                </h3>
                <p className="text-gray-600 mt-2">{goal?.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-gray-500">
                    {goal?.timeframe}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {goal?.progress}% Complete
                  </span>
                </div>
                <Progress value={goal?.progress} className="mt-2" />
                <Separator className="my-4" />
                <h4 className="font-semibold text-gray-700 mb-2">
                  Key Milestones
                </h4>
                <ul className="space-y-2">
                  {goal?.milestones.map((milestone, index) => (
                    <li key={index} className="flex items-center">
                      <span
                        className={`mr-2 ${
                          milestone.completed
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                      >
                        {milestone.completed ? (
                          <CheckCircleIcon className="w-5 h-5" />
                        ) : (
                          <AlertCircleIcon className="w-5 h-5" />
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          milestone.completed
                            ? "text-gray-700"
                            : "text-gray-500"
                        }`}
                      >
                        {milestone.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>

        {/* SWOT Matrix */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {(loading ? Array(4).fill("") : Object.entries(data || {})).map(
            ([category, items], index) => (
              <motion.div key={category || index} variants={itemVariants}>
                <Card
                  className={`overflow-hidden ${
                    loading ? "" : categoryColors[category]
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex items-center">
                      {loading ? (
                        <Skeleton className="h-8 w-32" />
                      ) : (
                        <>
                          {categoryIcons[category]}
                          <span className="ml-2">
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </span>
                        </>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px] pr-4">
                      <ul className="space-y-4">
                        {(loading ? Array(3).fill("") : items).map(
                          (item, itemIndex) => (
                            <AnimatePresence key={itemIndex}>
                              <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                              >
                                {loading ? (
                                  <Skeleton className="h-24 w-full" />
                                ) : (
                                  <Card className="bg-white">
                                    <CardContent className="p-4">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-gray-800">
                                          #{item.id} {item.title}
                                        </span>
                                        {statusIcons[item.status]}
                                      </div>
                                      <p className="text-sm text-gray-600 mb-2">
                                        {item.description}
                                      </p>
                                      <div className="flex items-center space-x-2 mb-2">
                                        <Badge
                                          variant="secondary"
                                          className={impactColors[item.impact]}
                                        >
                                          {item.impact} impact
                                        </Badge>
                                        <Badge variant="outline">
                                          {item.status}
                                        </Badge>
                                      </div>
                                      <motion.button
                                        className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none flex items-center"
                                        onClick={() =>
                                          toggleItemExpansion(category, item.id)
                                        }
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        {expandedItems[category]?.includes(
                                          item.id
                                        ) ? (
                                          <>
                                            Less details{" "}
                                            <ChevronUpIcon className="w-4 h-4 ml-1" />
                                          </>
                                        ) : (
                                          <>
                                            More details{" "}
                                            <ChevronDownIcon className="w-4 h-4 ml-1" />
                                          </>
                                        )}
                                      </motion.button>
                                      <AnimatePresence>
                                        {expandedItems[category]?.includes(
                                          item.id
                                        ) && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                              opacity: 1,
                                              height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                          >
                                            <Separator className="my-2" />
                                            <div className="space-y-2 text-sm text-gray-600">
                                              <p>
                                                <strong>Effect:</strong>{" "}
                                                {item.effect}
                                              </p>
                                              <p>
                                                <strong>Meaning:</strong>{" "}
                                                {item.meaning}
                                              </p>
                                              <p>
                                                <strong>Strategic Use:</strong>{" "}
                                                {item.use}
                                              </p>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </CardContent>
                                  </Card>
                                )}
                              </motion.li>
                            </AnimatePresence>
                          )
                        )}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>

        <footer className="text-center text-gray-500"></footer>
      </div>
    </div>
  );
}
