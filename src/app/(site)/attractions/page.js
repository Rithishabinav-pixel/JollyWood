import React from 'react'
import AttractionsClient from './AttractionsClient';

export const metadata = {
  title: "Attractions",
  description: "Discover the attractions available at Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <AttractionsClient/>
    </>
  )
}
