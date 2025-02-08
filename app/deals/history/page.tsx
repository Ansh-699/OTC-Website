"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export default function DealHistoryPage() {
  // Mock deal history data
  const dealHistory = [
    { id: 1, date: "2023-12-28", description: "Initial Setup", amount: 5000 },
    { id: 2, date: "2024-01-05", description: "Marketing Campaign - Facebook Ads", amount: 1500 },
    { id: 3, date: "2024-01-12", description: "Software License Renewal", amount: 250 },
    { id: 4, date: "2024-01-19", description: "Consulting Services - Strategy", amount: 3000 },
    { id: 5, date: "2024-01-26", description: "Team Training Workshop", amount: 800 },
    { id: 6, date: "2024-02-02", description: "New Equipment Purchase", amount: 1200 },
    { id: 7, date: "2024-02-09", description: "Website Redesign Project", amount: 6000 },
    { id: 8, date: "2024-02-16", description: "Client Acquisition - Deal Signed", amount: 10000 },
    { id: 9, date: "2024-02-23", description: "Office Space Rent", amount: 2200 },
    { id: 10, date: "2024-03-01", description: "Employee Bonuses - Q1", amount: 7500 },
  ];

  return (
    <motion.div
      className="container mx-auto py-10"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <h1 className="text-2xl font-bold mb-5">Deal History</h1>
      <ul>
        {dealHistory.map((deal, index) => (
          <motion.li
            key={deal.id}
            className="mb-2 p-4 rounded-md shadow-md bg-white hover:bg-gray-100 transition duration-300"
            variants={fadeIn}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{deal.date}</span> -{" "}
                {deal.description}
              </div>
              <div className="text-gray-600">${deal.amount}</div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
