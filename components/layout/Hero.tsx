import Image from "next/image";
import Link from "next/link";

export const Hero = () => {


  return (
    <section className="h-[100vh] relative overflow-hidden bg-primary/5">
      <div className="custom-container h-full">
        <div className="size-full flex items-center justify-between">
          <div className="w-full xl:max-w-[36rem] flex flex-col justify-center items-start gap-6">
            <h1 className="text-center xl:text-left">
              Where Every <span className="text-accent">Ride</span> Begins with a Smile
            </h1>
            <p className="mb-5 mx-auto text-center xl:text-left xl:mx-0 text-lg max-w-[36rem]">
              Discover high-quality bikes for every rider. Shop road, mountain, and electric bikes with fast shipping, expert support, and great prices.
            </p>
            <div className="w-full flex-center xl:justify-start">
              <Link href='/our-bikes' className="btn btn-accent">
                Shop now
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex">
            <Image 
              src="/assets/hero_bike.png" 
              alt="hero image" 
              width={765} 
              height={480}
              quality={100} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
