
const aboutItems = [
    {
        label: 'Project Done',
        number: 20
    }
];

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hi! I&apos;m Kris, a student at the University of South Florida 
                    and an enthusiastic Software Engineer.
                    Blending creativity, constant updates with technical skills,
                    I am committed to delivering the best for you, both in design and performance.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-yellow-400 font-semibold
                                    md:text-3xl">+</span>
                                </div>
                                
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>

                        ))
                    }
                    <img src="/images/logo.svg" alt="logo" width={30} 
                    height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
