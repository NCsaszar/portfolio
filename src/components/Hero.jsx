import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { ComputersCanvas } from './canvas';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
  const slideInAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
  });

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#915eff]'>Nicholas</span>
          </h1>
          <animated.div
            className={`${styles.heroSubText} mt-2 text-secondary`}
            style={slideInAnimation}
          >
            I am a Junior Full Stack Software Engineer with a solid foundation
            in Computer Science from East Stroudsburg University. As a recent
            graduate from Hack Reactor the Full Stack Immersive bootcamp, I have
            gained up-to-date knowledge and practical experience in the latest
            web development technologies/frameworks and industry best practices.
            Additionally, I have experience working in agile/scrum environments,
            effectively collaborating with cross-functional teams.
          </animated.div>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='2-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
