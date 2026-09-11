import React from 'react'
import StoryClient from './VisitorsClient';

export const metadata = {
  title: { absolute: "Visitors Guide - Jollywood Studios and Adventures" },
  description:
    "Welcome to Jollywood! Explore our guide for a seamless and enjoyable visit. Get essential information to discover our attractions and maximize your experience.",
};

export default function page() {
  return (
    <>
    <StoryClient/>
    </>
  )
}
