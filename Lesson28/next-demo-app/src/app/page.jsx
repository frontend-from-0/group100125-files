import { Card } from '../components/Card';
import {Hero} from './Hero';

export default function HomePage() {
  const data = [
    {
      title: 'JSX',
      body: 'This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.'
    },
    {
      title: 'Component',
      body: 'This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.'
    },
    {
      title: 'Props',
      body: 'This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.'
    },
  ]

  return (
    <main className='text-center my-10 min-h-dvh'>
      <Hero />
      <div className='max-w-4xl mx-auto grid grid-cols-2 grid-rows-2 gap-4'>
        {
          data.map(dataItem => (<Card>
            <h2 className='font-bold'>
            {dataItem.title}
          </h2>
          <p>{dataItem.body}</p>
          </Card>))
        }
      </div>
    </main>
  );
}
