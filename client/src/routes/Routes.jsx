import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SessionExpiryPopup from "../components/PopUp";
import CourseLayout from "../dashboard/pathways/course/CourseLayout";
import CreateCourseLayout from "../dashboard/pathways/course/CreateCourseLayout";
import CreateCourse from "../dashboard/pathways/course/CreateCourse";
import Course from "../dashboard/pathways/course/Course";
import Learn from "../dashboard/pathways/course/learn/Learn";
import MyProfile from "../dashboard/myProfile/MyProfile";
import Base from "../home/Base";
import Flow from "../home/start/Flow";
import NextBestStepWidget from "@/modules/insights/next-best-steps/NextBestStepWidget";
import AnimateR from "../routes/AnimatedRoute";
import FlowLayout from "../home/start/FlowLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import InterviewFeedback from "./dashboard/interview/components/FeedbackPage";
import TransactionResultPage from "../components/transaction/Transaction";
// import { ChatApp } from "../components/graphalogue/Graphalogue";
import ProtectedRoute from "../routes/ProtectedRoute";
import Login from "@/modules/authentication/log-in";
import Dashboard from "../dashboard/Dashboard";
import SignUp from "@/modules/authentication/sign-up";
import Error from "../components/Error";
import Setting from "../dashboard/setting/Setting";
import InputOTPForm from "@/modules/authentication/otp-input";
import useSessionManager from "@/clientSession/SessionManager";
import NextBestSteps from "@/modules/insights/next-best-steps/NextBestStepWidget";
// import DashbaordSidebar from "../dashboard/DashboardSideBar";
import SkillTaxonomy from "@/modules/skill/SkillTaxonomy";
import SkillAnalysis from "@/modules/skill/SkillGapAnalysis";
const AppRoutes = () => {
  const { isSessionExpired, setIsSessionExpired } = useSessionManager();
  return (
    <BrowserRouter>
      <SessionExpiryPopup
        show={isSessionExpired}
        onClose={() => setIsSessionExpired(false)}
        message={
          isSessionExpired
            ? "Please log in again to continue using the app."
            : "You do not have access to this resource."
        }
      />

      <Routes>
        <Route path="/" element={<Base />} />
        <Route
          path="/log-in"
          element={
            <GoogleOAuthProvider clientId={"SDS"}>
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/sign-up"
          element={
            <GoogleOAuthProvider
              clientId={
                "18778878240-e4a51gclug69terlnlib92jddu5s84gg.apps.googleusercontent.com"
              }
            >
              <SignUp />
            </GoogleOAuthProvider>
          }
        />
        <Route path="/verify" element={<InputOTPForm />} />

        <Route
          path="/flow"
          element={
            <AnimateR>
              <FlowLayout>
                <Flow />
              </FlowLayout>
            </AnimateR>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:jobId"
          element={<ProtectedRoute></ProtectedRoute>}
        />
        <Route
          path="/dashboard/interviews/track"
          element={<ProtectedRoute></ProtectedRoute>}
        />

        <Route
          path="/dashboard/next-step"
          element={
            <ProtectedRoute>
              <NextBestStepWidget />
            </ProtectedRoute>
          }
        />

        <Route path="/diagnostic" element={<ProtectedRoute></ProtectedRoute>} />

        {/* <Route path="/dash" element={<DashbaordSidebar />} /> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/taxonomy"
          element={
            <ProtectedRoute>
              <SkillTaxonomy />
            </ProtectedRoute>
          }
        />
        <Route path="/skill-analysis" element={<SkillAnalysis />}></Route>

        {/* <Route
        path="/resume/build"
        element={<ResumeLatexBuilder />}
      /> */}
        <Route
          path="/dashboard/cc"
          element={
            <ProtectedRoute>
              <CreateCourseLayout>
                <CreateCourse />
              </CreateCourseLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/cc/:courseId"
          element={
            <ProtectedRoute>
              <CourseLayout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:courseId"
          element={
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId/learn"
          element={
            <ProtectedRoute>
              <Learn />
            </ProtectedRoute>
          }
        />

        {/* <Route path="/graph/*" element={<GraphComponent />} /> */}

        <Route
          path="/setting"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/dash" element={<Page />} /> */}

        <Route path="/nextsteps" element={<NextBestSteps />} />
        <Route
          path="/cancel"
          element={<TransactionResultPage transactionSuccess={false} />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
