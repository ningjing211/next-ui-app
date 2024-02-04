'use client';
import EmblaCarouselC from './EmblaCarousel-c';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function BasicPage() {
    return (
        <div>
            <EmblaCarouselC slides={SLIDES} options={OPTIONS} />
        </div>
    );
}

// export default function BasicPage() {
//     const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
//     return (
//     <div>
//         <div className="embla" ref={emblaRef}>
//             <div className="embla__container">
//                 <div className="embla__slide">
//                     <video className="w-full" autoPlay muted loop controls>
//                         <source src="/video-v-1.mp4" type="video/mp4" />
//                     </video>
//                     <div className="mt-6">Static Photos</div>
//                 </div>
//                 <div className="embla__slide">
//                     <video className="w-full" autoPlay muted loop controls>
//                         <source src="/video-v-2.mp4" type="video/mp4" />
//                     </video>
//                     <div className="mt-6">Drawings & Paintings</div>
//                 </div>
//                 <div className="embla__slide">
//                     <video className="w-full" autoPlay muted loop controls>
//                         <source src="/video-v-3.mp4" type="video/mp4" />
//                     </video>
//                     <div className="mt-6">Feeds & Shorts</div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }