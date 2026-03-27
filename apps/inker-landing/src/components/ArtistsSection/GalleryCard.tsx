'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import styles from './ArtistsSection.module.scss';

/** Fallback until intrinsic dimensions are known (reduces layout jump) */
const defaultAspectRatio = 3 / 4;

/** Mobile horizontal strip: uniform height, width follows each image’s aspect ratio */
const mobileGalleryCardHeightPx = 200;

type GalleryCardProps = {
  alt: string;
  layout?: 'horizontal' | 'vertical';
  src: string;
};

export function GalleryCard({
  alt,
  layout = 'vertical',
  src,
}: GalleryCardProps) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const ratio = aspectRatio ?? defaultAspectRatio;
  const isHorizontal = layout === 'horizontal';

  const handleLoadingComplete = useCallback((img: HTMLImageElement) => {
    setAspectRatio(img.naturalWidth / img.naturalHeight);
  }, []);

  const horizontalWidthPx = mobileGalleryCardHeightPx * ratio;

  return (
    <div
      className={styles.card}
      data-layout={layout}
      style={
        isHorizontal
          ? {
              height: mobileGalleryCardHeightPx,
              width: horizontalWidthPx,
            }
          : { aspectRatio: ratio }
      }
    >
      <Image
        fill
        alt={alt}
        className={styles.image}
        sizes={
          isHorizontal
            ? '(max-width: 767px) 40vw, 200px'
            : '(max-width: 767px) 132px, 200px'
        }
        src={src}
        onLoadingComplete={handleLoadingComplete}
      />
    </div>
  );
}
