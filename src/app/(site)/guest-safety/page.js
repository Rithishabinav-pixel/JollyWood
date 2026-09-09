import React from 'react'
import GuestSafetyClient from './GuestSafetyClient';

export const metadata = {
  title: "Guest Safety",
  description: "Read the guest safety guidelines for visiting Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <GuestSafetyClient/>
    </>
  )
}
