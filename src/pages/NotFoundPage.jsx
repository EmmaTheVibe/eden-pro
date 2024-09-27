import { useEffect, useRef } from "react";

export default function NotFoundPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const current = sectionRef.current;
    return () => {
      if (current) {
        observer.unobserve(current);
      }
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div ref={sectionRef} className="not-found">
      <h1>
        <span>404.</span>
        <br />
        Page not found.
      </h1>
    </div>
  );
}
