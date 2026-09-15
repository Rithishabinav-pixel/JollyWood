import React from 'react'
import DryRidesClient from './DryRidesClient';

export const metadata = {
  title: "Dry Rides",
  description: "Explore the dry/land rides and attractions at Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <DryRidesClient/>
    </>
  )
}
