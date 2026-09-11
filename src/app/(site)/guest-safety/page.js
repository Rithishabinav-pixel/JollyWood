import React from 'react'
import GuestSafetyClient from './GuestSafetyClient';

export const metadata = {
  title: { absolute: "Guest Safety - Jollywood Studios and Adventures" },
  description:
    "Jollywood Studios & Adventures prioritizes your safety. Discover our safety measures and collaborate with our staff for a secure and memorable visit.",
};

export default function page() {
  return (
    <>
    <GuestSafetyClient/>
    </>
  )
}
