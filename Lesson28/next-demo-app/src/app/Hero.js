import {Card} from '../components/Card';

export function Hero () {
  return (
    <section>
      <h1 clasName='font-black text-xl'>Our first React / NextJS project</h1>
      <Card>
        <p>This is the hero section of our web application. You normaly put some important content here.</p>
      </Card>
    </section>
  )
}