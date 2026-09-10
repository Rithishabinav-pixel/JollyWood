import { prisma } from "@/lib/prisma";
import GalleryClient from './GalleryClient';

export const revalidate = 10; 

export const metadata = {
  title: "Gallery",
  description: "Browse photos from Vels Jollywood's rides, attractions and events.",
};

export default async function Page() {
  const [galleryImages, galleryCategories] = await Promise.all([
    prisma.galleryImage.findMany({
      include: { categories: { include: { galleryCategory: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.galleryCategory.findMany({ orderBy: { name: "asc" } }),
  ]);

  const images = galleryImages.map((item) => ({
    id: item.id,
    image: item.image,
    categories: item.categories.map((c) => c.galleryCategory.name),
  }));

  const categories = galleryCategories.map((category) => category.name);

  return (
    <>
    <GalleryClient images={images} categories={categories} />
    </>
  )
}
