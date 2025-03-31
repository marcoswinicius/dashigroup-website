"use client"

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Indicators() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });

    return (
        <div className="w-full flex px-4 md:px-28 mt-16 justify-center md:justify-start">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">

                <div className="flex gap-1 items-center" ref={ref1}>
                    <span className="text-primary-orange text-4xl md:text-5xl font-bold">
                        {inView1 && <CountUp end={23} duration={5} />}+
                    </span>
                    <span className="text-white text-sm leading-tight">
                        Years of<br /> Experience
                    </span>
                </div>

                <div className="flex gap-1 items-center" ref={ref2}>
                    <span className="text-primary-orange text-4xl md:text-5xl font-bold">
                        +{inView2 && <CountUp end={21} duration={4} />}
                    </span>
                    <span className="text-white text-sm leading-tight">
                        Tier 1<br /> Contractors
                    </span>
                </div>

                <div className="flex gap-1 col-span-2 items-center md:col-span-1 justify-center md:justify-start" ref={ref3}>
                    <span className="text-primary-orange text-4xl md:text-5xl font-bold">
                        {inView3 && <CountUp end={3} duration={2} />}+
                    </span>
                    <span className="text-white text-sm leading-tight">
                        Tier 2<br /> Contractors
                    </span>
                </div>

            </div>
        </div>
    );
}