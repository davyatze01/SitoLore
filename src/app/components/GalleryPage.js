// src/app/components/ImageGrid.js
import styles from "./style/gallery-style.module.css";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  const imagesDir = path.join(process.cwd(), "public/gallery");
  const files = fs.readdirSync(imagesDir);

  // Duplichiamo le immagini per farlo scrollare all'infinito
  const allImages = [...files, ...files];

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.galleryTrack}>
        {allImages.map((file, index) => (
          <div key={index} className={styles.gImageContainer}>
            <Image
              src={`/gallery/${file}`}
              alt={`foto ${index}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}