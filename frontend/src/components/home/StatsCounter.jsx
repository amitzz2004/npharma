import { useEffect, useRef, useState } from "react";
import "./StatsCounter.css";

const stats = [
  { label: "Products Supplied", value: 500, suffix: "+" },
  { label: "Hospitals & Clinics", value: 200, suffix: "+" },
  { label: "Brand Partners", value: 50, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
];

const useCountUp = (target, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 1400;
    const stepTime = Math.max(Math.floor(duration / target), 15);
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, target]);

  return count;
};

const StatItem = ({ value, suffix, label, start }) => {
  const count = useCountUp(value, start);
  return (
    <div className="stat-item">
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-counter" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} start={inView} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
