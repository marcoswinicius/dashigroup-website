import TransitionCard from "./TransitionCard"

export default function CompanyInfo() {
    return (
        <>
            <div className="w-full flex px-4 md:px-28 mt-16 justify-center md:justify-start">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                    <div className="flex gap-1 items-center">
                        <span className="text-primary-orange text-4xl md:text-5xl font-bold">23+</span>
                        <span className="text-white text-sm leading-tight">Years of<br /> Experience</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="text-primary-orange text-4xl md:text-5xl font-bold">+21</span>
                        <span className="text-white text-sm leading-tight">Tier 1<br /> Contractors</span>
                    </div>
                    <div className="flex gap-1 col-span-2 items-center md:col-span-1 justify-center md:justify-start">
                        <span className="text-primary-orange text-4xl md:text-5xl font-bold">03+</span>
                        <span className="text-white text-sm leading-tight">Tier 2<br /> Contractors</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full items-center justify-center py-[120px] px-8 md:px-24 gap-32">
                <div className="w-full lg:w-2/5">
                    <TransitionCard />
                </div>

                <div className="flex flex-col gap-11 w-full lg:w-3/5">
                    <div className="flex flex-col">
                        <span className="text-primary-orange block text-5xl lg:text-6xl font-bold">
                            Execute large-scale,
                        </span>
                        <span className="text-white block text-5xl lg:text-6xl font-bold">
                            high-impact projects
                        </span>
                    </div>
                    <p className="text-white">
                        At Dashi Group, we are committed to leveraging our expertise to proactively collaborate with our clients, ensuring the successful delivery of high-profile construction projects.
                        <br /><br />
                        Partnering with us means more than just receiving a service—it&apos;s about working with a dedicated, solutions-driven team that goes above and beyond to guarantee your project&apos;s success. We seamlessly integrate with other contractors, providing the technical expertise and personalized support needed to bring your vision to life, all while upholding the highest standards of safety and quality.
                    </p>
                </div>
            </div>
        </>
    )
}