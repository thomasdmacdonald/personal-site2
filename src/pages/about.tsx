import React, { type PropsWithChildren } from 'react'
import { type NextPage } from 'next'
import PageHeader from '~/components/text/PageHeader'


const aboutBlurb = [
    "Being a software developer is the perfect way of satisfying my love for creating efficient and elegant systems, as well as getting to see real people use those systems in their everyday life.",
    "From my time working at start ups, I've learned to balance writing well-engineered and beautiful code with shipping fast and getting @$!% done.",
    "I love taking products from the drawing board and putting them in to users' hands, and am always working to improve my knowledge, speed, and skill while developing."
]

const frontendBlurb = [
    'React is my go-to tool for creating responsive and functional web apps quickly and efficiently. I\'m proficient in HTML and CSS, and have used Material UI, Tailwind, and Boostrap for styling.'
]

const backendBlurb = [
    'I have experience working on monolith and microservice backends in frameworks like Flask and Express, '
]

const databaseBlurb = [
    'I\'m familiar with writing queries for traditional SQL databases like Postgres, as well as working with noSQL options like dynamodb, or even raw file stores like S3.'
]

const mlBlurb = [
    'I loved machine learning before it was cool (ok, maybe not), and have experience with data engineering projects as well as with frameworks liek Scikit Learn and PyTorch. Through my degree from UofT, I have advanced stats and calc knowledge, and have taken a wide range of ML courses.'
]

const devopsBlurb = [
    'I\'ve worked with a wide range of cloud services, from deploying and hosting servers, creating and deploying cloud functions, managing user pools, creating and managing databases, working on CI/CD pipelines.'
]

interface AboutSectionProps {
    header: string,
    body: string[]
}
const AboutSection : React.FC<AboutSectionProps> = ({header, body}) => {
    return (
        <div className="bg-neu neuShadowOut rounded-xl h-96 p-6">
            <p className="text-3xl font-bold mb-4">{header}</p>
            {body.map((text, i) => (
                <p key={i} className="text-xl mb-2">{text}</p>
            ))}
        </div>
    )
}

const About: NextPage = () => {
    return (
    <>
        <div style={{marginLeft: '10%'}} className='w-4/5 pt-20 mb-20'>
            <PageHeader className="mb-8">About</PageHeader>
            {aboutBlurb.map((text, i) => (
                <p key={i} className="text-lg mb-2">{text}</p>
            ))}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-3 gap-10 mt-8'>
                <AboutSection header={'Frontend'} body={frontendBlurb}/>
                <AboutSection header={'Backend'} body={backendBlurb}/>
                <AboutSection header={'Databases'} body={databaseBlurb}/>
                <AboutSection header={'Machine Learning'} body={mlBlurb}/>
                <AboutSection header={'Dev Ops'} body={devopsBlurb}/>
            </div>
        </div>
    </>
    )
}

export default About