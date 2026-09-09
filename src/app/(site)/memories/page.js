import React from 'react'
import MemoriesClient from './MemoriesClient';

export const metadata = {
  title: "Memories",
  description: "Relive memories and highlights from Vels Jollywood.",
};

export default function page() {
  return (
    <>
    <MemoriesClient/>
    </>
  )
}
