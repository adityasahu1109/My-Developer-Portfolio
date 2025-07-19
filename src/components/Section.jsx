import { forwardRef, useEffect } from 'react';

const Section = forwardRef(({ id, setActive, children }, ref) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id, setActive]);

  return (
    <section 
      id={id} 
      ref={ref}
      className="min-h-screen px-4 py-16"
    >
      {children}
    </section>
  );
});

export default Section;