import { lazy } from "react";

const DashboardPage = lazy(() => import("@/dashboard/DashboardPage"));
const Pathway = lazy(() => import("@/dashboard/pathways/Pathway"));
const Insights = lazy(() => import("@/modules/insights/Insights"));
const InterviewPage = lazy(() => import("@/dashboard/interview/InterviewPage"));
const Mentor = lazy(() => import("@/modules/mentor/Mentor"));
const ContributeLayout = lazy(() => import("@/modules/contribute/Layout"));
const Community = lazy(() => import("@/dashboard/community/Community"));
const AchievementPage = lazy(
  () => import("@/dashboard/achievements/AchievementPage")
);

export const componentMap = {
  Dashboard: <DashboardPage />,
  Pathway: <Pathway />,
  Insights: <Insights />,
  Interview: <InterviewPage />,
  Mentor: <Mentor />,
  Contribute: <ContributeLayout />,
  Community: <Community />,
  Achievements: <AchievementPage />,
};
