import Container from '@/component/ui/container'
import HeadingBadges from '@/component/ui/heading-badges'
import React from 'react'
import { IconRocket } from '@tabler/icons-react'
import Heading from '@/component/ui/heading'
import SubHeading from '@/component/ui/sub-heading'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/component/ui/card'
import { cn } from '@/lib/utils'
import Skeleton1 from './skeleton1'
import Skeleton2 from './skeleton2'
import Skeleton3 from './skeleton3'
import Skeleton5 from './skeleton5'
const Features = () => {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <HeadingBadges>
        <IconRocket className='size-3.5' /> Our Features
      </HeadingBadges>
      <Heading tag='h2'>Features To Boost Your Productivity</Heading>
      <SubHeading tag='p' >Everything you need to manage your projects and tasks</SubHeading>
      <div className='grid lg:grid-cols-6 grid-cols-1 gap-6 w-full max-w-5xl mt-16'>
        <Card className='lg:col-span-3 col-span-1'>
          <CardContent className='px-16 pt-8'>
            <Skeleton1 />
          </CardContent>
          <CardHeader>
            <CardTitle>
              Adaptive Organiser
            </CardTitle>
            <CardDescription>
              Your tasks automatically rearrange based on deadlines and importance, so you always know what to focus on next.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='lg:col-span-3 col-span-1'>
          <CardContent className='px-16 pt-8'>
            <Skeleton2 />
          </CardContent>
          <CardHeader>
            <CardTitle>
              Templates & Workflows
            </CardTitle>
            <CardDescription>
              Set up repeatable workflows or start wth ready-made templates for projects, spring, or personal rou
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='lg:col-span-3 col-span-1'>
          <CardContent className='px-16 pt-8'>
            <Skeleton3 />
          </CardContent>
          <CardHeader>
            <CardTitle>
              Collaboration Made Easy
            </CardTitle>
            <CardDescription>
              Share tasks, projects, and progress with your team or clients for seamless collaboration.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='lg:col-span-3 col-span-1'>
          <CardContent className='px-16 pt-8'>
            <Skeleton1 />
          </CardContent>
          <CardHeader>
            <CardTitle>
              Templates & Workflows
            </CardTitle>
            <CardDescription>
              Set up repeatable workflows or start wth ready-made templates for projects, spring, or personal rou
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='lg:col-span-6 col-span-1'>
          <CardContent className='px-4 py-0 relative pt-8'>
            <Skeleton5 />
          </CardContent>
          <CardHeader>
            <CardTitle>
              Templates & Workflows
            </CardTitle>
            <CardDescription>
              Set up repeatable workflows or start wth ready-made templates for projects, spring, or personal rou
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Container>
  )
}

export default Features




