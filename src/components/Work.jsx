
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Full Stack Project Management',
      tags: ['React', 'Redux Toolkit', 'AWS'],
      projectLink: 'https://github.com/Pbao269/project-management'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Social Media Mobile App',
      tags: ['React Native', 'Supabase', 'Expo Go'],
      projectLink: 'https://drive.google.com/file/d/14Y15vrtb_Q9Ui-X_yNquB0usL4RkMg48/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Twitter Sentiment Analysis',
      tags: ['Machine Learning', 'Python', 'ScikitLearn'],
      projectLink: 'https://github.com/Pbao269/Twiiter-Sentiment-Analysis'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Arduino Robot for K8-students',
      tags: ['Robotics', 'Arduino IDE', 'Human Following'],
      projectLink: 'https://github.com/Pbao269/Arduino-Project'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Discord BOT System',
      tags: ['Discord', 'Moderation', 'MongoDB'],
      projectLink: 'https://github.com/Pbao269/Discord-Bot-2'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'NFT Trading Website',
      tags: ['Web-design', 'HTML', 'CSS'],
      projectLink: 'https://github.com/Pbao269/eCommerce-Website'
    },
  ];
const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
