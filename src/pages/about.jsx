import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jigar D. Prajapati</title>
        <meta
          name="description"
          content="The Coding Chronicles of Jigar: Where Serious Software
          Development Meets Silly Humor!"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              The Coding Chronicles of Jigar: Where Serious Software Development
              Meets Silly Humor!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello there! Welcome to my personal website, where you can get
                to know me a little better. My name is Jigar Prajapati, and I am
                a software developer. I have worked with some amazing
                technologies such as Java and React, and I love exploring the
                possibilities that the world of tech has to offer.
              </p>
              <p>
                When I'm not in front of my computer, you can find me doing all
                sorts of fun activities. I love trying out new recipes in the kitchen.
              </p>
              <p>
                In addition to my passion for software development, I'm also an
                aspiring student of AI and ML. I believe that the future of
                technology lies in the possibilities of artificial intelligence
                and machine learning, and I am excited to be a part of this
                ever-evolving field.
              </p>
              <p>
                I love exploring new places and meeting new people, and I'm
                always up for a good adventure. So if you have any exciting
                ideas or recommendations, feel free to drop me a message!
              </p>
              <p>
                Thanks for taking the time to get to know me a little better. If
                you have any questions or just want to say hi, feel free to
                reach out. I'd love to hear from you!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/mruser420"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/MrUser420"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jdp12/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:rural_archive.0@icloud.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                rural_archive.0@icloud.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
