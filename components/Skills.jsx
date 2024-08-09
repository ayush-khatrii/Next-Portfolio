import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { frontendTechStack, backendTechStack } from '@/constants/index';

const Skills = () => {
  return (
    <div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className='text-center text-gray-300 font-bold text-2xl py-10 '>Skills</h1>
        {/* <h1 className='bg-gradient-to-b text-3xl my-10 font-extrabold from-violet-600 to-purple-950 bg-clip-text text-transparent'>Skills</h1> */}
        <div>
          <InfiniteMovingCards
            items={frontendTechStack}
            direction="right"
            speed="slow"
          />
        </div>
        <div>
          {/* <h1 className='text-left text-2xl my-10 text-purple-500 font-bold'>Backend</h1> */}
          <InfiniteMovingCards
            items={backendTechStack}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default Skills