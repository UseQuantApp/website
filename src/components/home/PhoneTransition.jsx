import { useLayoutEffect, useRef } from "react";
import heroPhone from "../../assets/hero-phone.webp";
import materialsPhone from "../../assets/feature-materials.webp";

// One phone that travels from the hero into the "What Quant Does" section as the page scrolls.
// It interpolates between two slots in the page:
//   #hero-phone-slot     the hero phone image
//   #feature-phone-slot  the phone image beside the feature list
// Desktop only (768px+). On mobile and for reduced-motion users both slots show as normal.

const HERO_SLOT = "hero-phone-slot";
const FEATURE_SLOT = "feature-phone-slot";
const DOCK_AT = 0.2; // the feature phone docks when its top reaches 20% of the viewport height

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (from, to, t) => from + (to - from) * t;
const smooth = (t) => t * t * (3 - 2 * t);

export default function PhoneTransition() {
  const layerRef = useRef(null);
  const heroImgRef = useRef(null);
  const featureImgRef = useRef(null);

  useLayoutEffect(() => {
    const layer = layerRef.current;
    const heroImg = heroImgRef.current;
    const featureImg = featureImgRef.current;
    const root = document.documentElement;
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const setSlots = (heroVisible, featureVisible) => {
      root.dataset.phoneHero = heroVisible ? "on" : "off";
      root.dataset.phoneFeature = featureVisible ? "on" : "off";
    };

    const update = () => {
      frame = 0;
      const heroSlot = document.getElementById(HERO_SLOT);
      const featureSlot = document.getElementById(FEATURE_SLOT);

      if (!heroSlot || !featureSlot || !desktop.matches || reducedMotion.matches) {
        layer.style.display = "none";
        setSlots(true, true);
        return;
      }

      const from = heroSlot.getBoundingClientRect();
      const to = featureSlot.getBoundingClientRect();

      if (!from.width || !to.width) {
        layer.style.display = "none";
        setSlots(true, true);
        return;
      }

      const scrollY = window.scrollY;
      const end = to.top + scrollY - window.innerHeight * DOCK_AT;
      const progress = end > 0 ? clamp(scrollY / end, 0, 1) : 1;

      if (progress >= 1) {
        layer.style.display = "none";
        setSlots(false, true);
        return;
      }

      const t = smooth(progress);
      const fade = smooth(clamp((progress - 0.55) / 0.35, 0, 1));

      layer.style.display = "block";
      layer.style.width = `${lerp(from.width, to.width, t)}px`;
      layer.style.height = `${lerp(from.height, to.height, t)}px`;
      layer.style.transform = `translate3d(${lerp(from.left, to.left, t)}px, ${lerp(from.top, to.top, t)}px, 0)`;
      heroImg.style.opacity = String(1 - fade);
      featureImg.style.opacity = String(fade);
      setSlots(false, false);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    desktop.addEventListener("change", schedule);
    reducedMotion.addEventListener("change", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      desktop.removeEventListener("change", schedule);
      reducedMotion.removeEventListener("change", schedule);
      delete root.dataset.phoneHero;
      delete root.dataset.phoneFeature;
    };
  }, []);

  return (
    <>
      <style>{`
        html[data-phone-hero="off"] #${HERO_SLOT},
        html[data-phone-feature="off"] #${FEATURE_SLOT} { opacity: 0 !important; }
      `}</style>

      <div
        ref={layerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden will-change-transform"
      >
        <img
          ref={heroImgRef}
          src={heroPhone}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
        />
        <img
          ref={featureImgRef}
          src={materialsPhone}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain opacity-0"
        />
      </div>
    </>
  );
}
