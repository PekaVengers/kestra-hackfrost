import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Bot,
  CircleUser,
  Command,
  Hand,
  HeartHandshake,
  Layers2,
  LineChart,
  Loader2,
  Menu,
  MessageCircleDashed,
  MessagesSquare,
  Paperclip,
  Radio,
  Route,
  Search,
  Zap,
  Eye,
  ScanSearch,
  Telescope,
  ScanText,
  BriefcaseBusiness,
  ChevronLeftCircle,
  Dumbbell,
  Medal,
  PencilRuler,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUserId } from "@/helpers/api";
import { DashboardPage } from "./DashboardPage";

import { useNavigate } from "react-router-dom";

import Pathway from "./pathways/Pathway";

import DashboardHeader from "./components/DashboardHeader";
import UpgradeCard from "./components/UpgradeCard";
import Insights from "@/modules/insights/Insights";
import { FaChartArea } from "react-icons/fa";
import { name } from "@stream-io/video-react-sdk";

const navItems = [
  { label: "Dashboard", icon: <Command className="h-4 w-4" /> },

  { label: "Pathway", icon: <Route className="h-4 w-4" /> },

  { label: "Insights", icon: <Eye className="h-4 w-4" /> },
  {
    label: "Back",
    icon: <ChevronLeftCircle className="h-4 w-4" />,
    name: "Back to Home",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const [isLoading, setIsLoading] = useState(false);
  getUserId(localStorage.getItem("token"));
  const userId = localStorage.getItem("_id");
  useEffect(() => {
    setIsLoading(true);
    setIsLoading(false);
  }, [selectedComponent]);

  const componentMap = {
    Dashboard: <DashboardPage />,
    Pathway: <Pathway />,
    // Practice: <Practice />,
    // Coach: <Gemini />,
    Insights: <Insights />,
  };

  const renderComponent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      );
    }

    if (selectedComponent === "Jobs") {
      navigate("/jobs");
    }

    if (selectedComponent === "Practice") {
      navigate("/practice");
    }

    if (selectedComponent === "Community") {
      navigate("/community");
    }
    if (selectedComponent === "Interview") {
      navigate("/mock");
    }

    if (selectedComponent === "Resume") {
      navigate("/resume");
    }

    if (selectedComponent === "Mentor") {
      navigate("/mentor");
    }

    if (selectedComponent === "Back") {
      navigate("/");
    }
    const SelectedComponent = componentMap[selectedComponent] || (
      <DashboardPage />
    );
    return SelectedComponent;
  };

  return (
    <div className="relative min-h-screen w-screen bg-white">
      <div className="flex">
        <div className="fixed left-0 top-0 bottom-0 w-[220px] lg:w-[280px] border-r bg-muted/40 overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 font-semibold"
              >
                <MessageCircleDashed className="h-6 w-6" />
                <span className="head">Career+</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedComponent(item.label)}
                    className={`flex items-center gap-3 px-3 py-2 transition-all ${
                      selectedComponent === item.label
                        ? "bg-primary text-muted"
                        : "bg-muted text-primary hover:text-primary"
                    } ${
                      index === 0 ? "rounded-tl-[12px] rounded-tr-[12px]" : ""
                    } ${
                      index === navItems.length - 1
                        ? "rounded-bl-[12px] rounded-br-[12px]"
                        : ""
                    }`}
                  >
                    {item.icon}
                    {item.name || item.label}
                  </button>
                ))}
              </nav>
            </div>
            {/* <UpgradeCard /> */}
          </div>
        </div>
        <div className="flex-1 ml-[220px] lg:ml-[280px]">
          <DashboardHeader view={[["Dashboard", "/dashboard"]]} />
          <div className="p-4 lg:p-2">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;