import React from 'react'
import ParkClient from './ParkClient';

export const metadata = {
  title: "Park Map",
  description: "View the park map for Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <ParkClient/>
    </>
  )
}
