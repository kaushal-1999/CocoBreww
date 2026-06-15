import { useEffect } from "react";

export default function useAnimations() {
    useEffect(() => {
        const elements = document.querySelectorAll(".a");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active"); // replay animation
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}