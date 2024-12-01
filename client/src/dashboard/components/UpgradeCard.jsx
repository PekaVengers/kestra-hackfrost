import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CheckoutButton from "@/components/CheckoutButton";
import { motion } from "framer-motion";

function UpgradeCard() {
  return (
    <motion.div
      className="mt-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="shadow-lg rounded-xl border border-gray-200"
        whileHover={{
          scale: 1.05, // Slight zoom on hover
          boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.1)", // Soft shadow on hover
        }}
        whileTap={{ scale: 0.98 }} // Slight shrink on tap
      >
        <Card x-chunk="dashboard-02-chunk-0" className="bg-white rounded-xl">
          <CardHeader className="p-4">
            <motion.div
              className="flex items-center justify-between"
              whileHover={{ x: 5 }} // Slight move on hover for card title
            >
              <CardTitle className="gradient-text text-xl font-bold text-transparent bg-clip-text">
                Upgrade to Plus
              </CardTitle>
            </motion.div>

            <CardDescription className="text-gray-600 mt-2">
              Unlock all features and get unlimited credits.
            </CardDescription>

            <div className="mt-4">
              <Progress value={33} className="h-2 rounded-full" />
              <p className="text-sm my-2 text-slate-500">
                82 Out of 100 Credits Used
              </p>
            </div>
          </CardHeader>

          <CardContent className="">
            <CheckoutButton />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default UpgradeCard;
