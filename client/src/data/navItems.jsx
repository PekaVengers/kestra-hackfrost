import {
  Command,
  Route,
  Eye,
  MessagesSquare,
  Hand,
  ScanText,
  Medal,
  HeartHandshake,
  ChevronLeftCircle,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", icon: <Command className="h-4 w-4" /> },
  { label: "Pathway", icon: <Route className="h-4 w-4" /> },
  { label: "Insights", icon: <Eye className="h-4 w-4" /> },
  { label: "Interview", icon: <MessagesSquare className="h-4 w-4" /> },
  { label: "Mentor", icon: <Hand className="h-4 w-4" /> },
  { label: "Contribute", icon: <ScanText className="h-4 w-4" /> },
  { label: "Achievements", icon: <Medal className="h-4 w-4" /> },
  { label: "Community", icon: <HeartHandshake className="h-4 w-4" /> },
  {
    label: "Back",
    icon: <ChevronLeftCircle className="h-4 w-4" />,
    name: "Back to Home",
  },
];
