import { useState, useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  label: string;
  isVisible: boolean;
}

function Counter({ target, label, isVisible }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / 100;
    const timer = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + increment;
        if (newCount >= target) {
          clearInterval(timer);
          return target;
        }
        return newCount;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-emsi-green mb-2">
        {Math.ceil(count).toLocaleString()}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export default function KeyFigures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos chiffres clés</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter target={39} label="Années d'expérience" isVisible={isVisible} />
          <Counter target={19} label="Campus" isVisible={isVisible} />
          <Counter target={20000} label="Diplômés" isVisible={isVisible} />
          <Counter target={240} label="Entreprises partenaires" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}
