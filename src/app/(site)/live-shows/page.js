import React from 'react'
import LiveShowsClient from './LiveShowsClient';

export const metadata = {
  title: "Live Shows",
  description: "Discover the live shows and entertainment at Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <LiveShowsClient/>
    </>
  )
}
