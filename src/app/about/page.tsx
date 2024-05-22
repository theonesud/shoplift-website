import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Passion for Excellence and Innovation"
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Customer Obsession" invert>
            We put our customers at the heart of everything we do, ensuring their needs and goals drive our innovation and service.
          </GridListItem>
          <GridListItem title="Attention to Detail" invert>
            Our focus on the finer points sets us apart. We believe that excellence is in the details, and we strive for perfection in every project.
          </GridListItem>
          <GridListItem title="Cutting-Edge Innovation" invert>
            We stay ahead of the curve by constantly exploring new technologies and methodologies, ensuring our clients always benefit from the latest advancements.
          </GridListItem>
          <GridListItem title="Fair Pricing" invert>
            We are committed to providing exceptional value without the hefty price tag, making top-tier e-commerce solutions accessible to all businesses.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Sudhanshu Passi',
        role: 'CEO / CTO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Eashan Shetty',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Ishan Rathod',
        role: 'Senior Communications Designer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Siddharth Nag',
        role: 'Product Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Raghavendra',
        role: 'Engineer',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Chaitanya',
        role: 'Engineer',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Ishan Malik',
        role: 'Engineer',
        image: { src: imageLeonardKrasner },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Shoplift Accelerator was born in 2020, amidst the aftermath of the COVID-19 pandemic when the global supply chain was in disarray. We saw an opportunity to help businesses transition to e-commerce platforms and provide solutions that empower them from within.
          </p>
          <p>
          Our mission is to empower businesses to thrive in the e-commerce world. We are driven by a passion for innovation and a commitment to making a difference. Our team is a diverse group of dedicated professionals who are focused on customer satisfaction. Each member brings their unique skills and perspectives, contributing to a dynamic and supportive work environment.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="7" label="Employees" />
          <StatListItem value="6" label="Satisfied clients" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
