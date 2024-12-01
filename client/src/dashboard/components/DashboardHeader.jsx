import React from "react";
import UserSheet from "./UserSheet";
import UserDropdownMenu from "./UserDropdownMenu";
import UserSearchBar from "./UserSearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Mail,
  Video,
  Star,
  MessageCircleQuestion,
  BookOpen,
  NotebookPen,
  BadgeHelp,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PillButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Slightly increase size on hover
      whileTap={{ scale: 0.95 }} // Minimal pop effect on tap
      className="flex items-center bg-white py-1 px-4 rounded-sm cursor-pointer transition-all border-2 border-gray-100"
    >
      <Link
        to="https://intervue.gitbook.io/intervue"
        target="_blank"
        className="flex items-center"
      >
        <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
        <span className="font-semibold text-gray-700">Read Docs</span>
      </Link>
    </motion.div>
  );
};

const BreadcrumbComponent = ({ viewProp }) => (
  <Breadcrumb className="flex items-center space-x-2">
    {viewProp.map(([pageName, pageUrl], index) => (
      <React.Fragment key={index}>
        <BreadcrumbItem>
          {index !== viewProp.length - 1 ? (
            <BreadcrumbLink href={pageUrl} className="text-blue-500">
              {pageName}
            </BreadcrumbLink>
          ) : (
            <span className="text-gray-700">{pageName}</span>
          )}
        </BreadcrumbItem>
        {index !== viewProp.length - 1 && (
          <BreadcrumbSeparator className="mx-2">/</BreadcrumbSeparator> // Replaces hidden class with a visible separator
        )}
      </React.Fragment>
    ))}
  </Breadcrumb>
);

function DashboardHeader({
  view,
  icon,
  isSearchRequired = false,
  isMentorRequired = false,
  isJobieRequired = false,
  isAskQuestionRequired = false,
  isColabEditorRequired = false,
  isHelpRequired = false,
}) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] backdrop-blur-md">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-muted/80 to-transparent h-6"></div>
      <div className="flex flex-row items-center space-x-1 px-3 py-1">
        <BreadcrumbComponent viewProp={view}></BreadcrumbComponent>
      </div>

      <UserSheet />
      {isSearchRequired ? (
        <UserSearchBar />
      ) : (
        <div className="w-full flex-1"></div>
      )}
      {isMentorRequired && (
        <div className="flex items-center space-x-2">
          <Link to="/mentor/connect">
            <Button variant="shine" className="flex items-center space-x-2">
              <Video className="h-5 w-5" />
              <span>Contact Mentor</span>
            </Button>
          </Link>
        </div>
      )}

      {isHelpRequired && (
        <div className="flex items-center space-x-2">
          <Link to="/help">
            <Button variant="shine" className="flex items-center space-x-2">
              <BadgeHelp className="h-5 w-5" />
              <span>I need Help</span>
            </Button>
          </Link>
        </div>
      )}

      {isJobieRequired && (
        <div className="flex items-center space-x-2">
          <Button variant="shine" className="flex items-center space-x-2">
            <MessageCircleQuestion className="h-5 w-5" />
            <span>Ask Jobie</span>
          </Button>
        </div>
      )}

      {isColabEditorRequired && (
        <div className="flex items-center space-x-2">
          <Link to="/notebook">
            <Button variant="shine" className="flex items-center space-x-2">
              <NotebookPen className="h-5 w-5" />
              <span>Colab Editor</span>
            </Button>
          </Link>
        </div>
      )}

      <UserSearchBar />
      <PillButton />
      <UserDropdownMenu />
    </header>
  );
}

export default DashboardHeader;
