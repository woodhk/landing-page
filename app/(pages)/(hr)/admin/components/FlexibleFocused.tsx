import Image from 'next/image';
import { flexibleFocusedData } from '../data/flexibleFocused';

export default function FlexibleFocused() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1a1a1a]">
          Flexible and Focused Training for<br />Busy Professionals
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {flexibleFocusedData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="h-[300px] bg-[#f5f5f5] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a]">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
