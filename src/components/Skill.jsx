import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/sql.svg',
        label: 'SQL',
        desc: 'Programming'
    },
    {
        imgSrc: '/images/python.svg',
        label: 'Python',
        desc: 'Programming'
    },
    {
        imgSrc: '/images/c.svg',
        label: 'C/C#/C++',
        desc: 'Programming'
    },
    {
        imgSrc: '/images/typescript.svg',
        label: 'TypeScript',
        desc: 'Programming'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Programming'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: '/images/nextjs.svg',
        label: 'NextJS',
        desc: 'React Framework'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/images/postgresql.svg',
        label: 'PostgreSQL',
        desc: 'Database'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'JS Library'
    },
    {
        imgSrc: '/images/react-native.svg',
        label: 'React Native',
        desc: 'React Framework'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/aws.svg',
        label: 'AWS',
        desc: 'Cloud Computing'
    },
    {
        imgSrc: '/images/git.svg',
        label: 'Git',
        desc: 'DevOps Tool'
    },
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                These are technologies I have been learning and have utilized
                to create websites, mobile apps, and other personal projects.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) =>(
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                    ))
                }
            </div>
        </div>

    </section>
  )
}

export default Skill
