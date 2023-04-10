import Link from 'next/link';
import Image from 'next/image';

export default function FirstPage() {
  return (
    <div>
      <h2>MY NAME IS <h1 style={{color: 'blue'}}>IM SI HUN</h1></h2> 
      
      <div style={{ textAlign: "left" }}>
        <Image
          src="/images/imsihunpicture.jpg"
          alt="My image"
          width={500}
          height={500}
        />
      </div>
      <span><ul><h3><li>My hobby is playing the game(league of legend,vallorant,fifa online,genshin impact)and playing the piano</li>
      <li>My family is father,mother,older brother,younger brother</li></h3></ul></span>
      <Link href="/">Back to home</Link>
    </div>
  )
}