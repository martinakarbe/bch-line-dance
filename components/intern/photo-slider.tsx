import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

type PhotoSliderProps = {
  photos: string[];
  activeIndex: number;
};

export function PhotoSlider({ photos, activeIndex }: PhotoSliderProps) {
  if (photos.length === 0) {
    return (
      <section className="rounded-2xl border-3 border-[#d4a574] bg-[#fff9f2] p-8 text-center">
        <ImageIcon className="mx-auto mb-3 h-8 w-8 text-[#b45309]" aria-hidden="true" />
        <h2 className="font-serif text-xl text-[#3d2314]">Fotos</h2>
        <p className="mt-2 text-[#78350f]">
          Hier sind noch keine Fotos hinterlegt.
        </p>
      </section>
    );
  }

  const filename = photos[activeIndex];
  const title = filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
  const previousIndex = (activeIndex - 1 + photos.length) % photos.length;
  const nextIndex = (activeIndex + 1) % photos.length;

  return (
    <section
      id="fotos"
      aria-label="Private Fotos"
      className="rounded-2xl border-3 border-[#d4a574] bg-[#fff9f2] p-4 sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="font-serif text-xl text-[#3d2314]">Fotos</h2>
        <p className="text-sm text-[#78350f]" aria-live="polite">
          Bild {activeIndex + 1} von {photos.length}
        </p>
      </div>

      <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-xl bg-[#d4a574]/15">
        <img
          key={filename}
          src={`/api/intern/bilder/${encodeURIComponent(filename)}`}
          alt={title}
          className="max-h-[65vh] w-full object-contain"
        />
        {photos.length > 1 && (
          <>
            <a
              href={`/intern?foto=${previousIndex}#fotos`}
              aria-label="Vorheriges Bild"
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#3d2314]/75 text-white transition-colors hover:bg-[#3d2314] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b45309]"
            >
              <ChevronLeft aria-hidden="true" />
            </a>
            <a
              href={`/intern?foto=${nextIndex}#fotos`}
              aria-label="Nächstes Bild"
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#3d2314]/75 text-white transition-colors hover:bg-[#3d2314] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b45309]"
            >
              <ChevronRight aria-hidden="true" />
            </a>
          </>
        )}
      </div>

      <p className="mt-3 text-center text-sm text-[#78350f]">{title}</p>
    </section>
  );
}
