import React from 'react'
import AdventuresClient from './AdventuresClient';

export const metadata = {
  title: "Adventures",
  description: "Explore the adventure activities available at Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <AdventuresClient/>
    </>
  )
}
