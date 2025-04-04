import React from 'react';
import { getPageMeta } from '../../../../../data/meta';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const metadata = getPageMeta("/(staff)/(features)/language-drills");
  return {
    metadataBase: new URL('https://fluentpro.ai'), // Replace with your actual domain
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage],
    },
  };
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}