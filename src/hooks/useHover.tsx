import { createSignal, onCleanup } from "solid-js";

const useHover = () => {
  const [isHovered, setIsHovered] = createSignal<boolean>(false);
  let ref: HTMLElement | null = null;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const attachRef = (element: HTMLElement | null) => {
    if (ref) {
      onCleanup(() => {
        ref?.removeEventListener("mouseenter", handleMouseEnter);
        ref?.removeEventListener("mouseleave", handleMouseLeave);
      });
    }

    if (element) {
      ref = element;
      ref.addEventListener("mouseenter", handleMouseEnter);
      ref.addEventListener("mouseleave", handleMouseLeave);
    }
  };

  return {
    attachRef,
    isHovered,
  };
};

export default useHover;
