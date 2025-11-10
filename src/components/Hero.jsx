import { ButtonPrimary } from "./Button"

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img src="/images/avatar-1.jpg" width={40} height={40}
                        alt="Kris To" className="img-cover" />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>

                        Available for Work
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-6 lg:mb-8">
                    Consistently Learning and Innovating as a Software Engineer.
                </h2>

                <p className="text-zinc-400 text-lg max-w-[48ch] leading-relaxed">
                    I architect web and mobile experiences that stay performant, accessible,
                    and maintainable from MVP to enterprise scale.
                </p>

                <div className="mt-8">
                    <ButtonPrimary 
                        label="Explore my work"
                        icon="arrow_outward"
                        href="#work"
                    />
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="group relative w-full max-w-[520px] ml-auto">
                    <div className="absolute inset-0 rounded-[55px] bg-gradient-to-br from-yellow-500/40 via-amber-400/50 to-orange-500/40 blur-3xl opacity-70 group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative rounded-[45px] border border-yellow-200/30 bg-gradient-to-br from-zinc-900 via-zinc-900/60 to-zinc-950 shadow-[0_30px_90px_rgba(0,0,0,0.65)] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-yellow-200/70 group-hover:shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <figure className="relative p-10">
                            <img 
                                src="/images/hero-banner.png" 
                                width={656}
                                height={800}
                                alt="Kris To"
                                className="w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero
