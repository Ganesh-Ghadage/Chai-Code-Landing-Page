import { LaptopContainerScroll } from "./ui/container-scroll-animation";

export function LaptopScroll() {
  return (
    <div className="h-[200dvh] absolute top-0 -z-10 w-full">
      <LaptopContainerScroll>
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/VNb_LawBBWU?si=5K5ZYxFCUtYruPLL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </LaptopContainerScroll>
    </div>
  );
}
