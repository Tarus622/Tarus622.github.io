import PropTypes from 'prop-types'
import ProfilePhoto from '../public/nova_petropolis.jpeg'
import { useState } from 'react'
import Card from './Card';
import LeftArrow from '../public/double-arrow-left-icon.svg'
import RightArrow from '../public/double-arrow-right-icon.svg'

const knowledges1 = [{
    id: 0,
    title: 'HTML',
    info: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that define various page components.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
}, {
    id: 1,
    title: 'CSS',
    info: 'CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg'
},
{
    id: 2,
    title: 'JavaScript',
    info: 'JavaScript is a high-level, interpreted programming language used for making web pages interactive.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
},
{
    id: 3,
    title: 'Node.js',
    info: 'Node.js is a JavaScript runtime environment that allows you to execute JavaScript code on the server-side.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg'
},
{
    id: 4,
    title: 'React',
    info: 'React is a JavaScript library for building user interfaces, often used for creating single-page applications.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
},
{
    id: 5,
    title: 'C',
    info: 'C is a general-purpose programming language known for its efficiency and low-level memory manipulation capabilities.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg'
},]
const knowledges2 = [
    {
        id: 6,
        title: 'C#',
        info: 'C# (C Sharp) is a modern, object-oriented programming language developed by Microsoft.',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    {
        id: 7,
        title: 'Nest.js',
        info: 'Nest.js is a TypeScript-based web framework for building scalable and efficient server-side applications.',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'
    },
    {
        id: 8,
        title: 'Python',
        info: 'Python is a versatile, high-level programming language known for its simplicity and readability.',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        id: 9,
        title: 'Git',
        info: 'Git is a distributed version control system used for tracking changes in source code during software development.',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        id: 10,
        title: 'MySQL',
        info: 'SQL (Structured Query Language) is a domain-specific language used for managing and querying relational databases.',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        id: 11,
        title: 'MongoDB',
        info: 'MongoDB is a NoSQL database system that stores data in a flexible, JSON-like format.',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
]

export default function BoxContent({ contentNumber, className }) {
    const [mouseOver, setMouseOver] = useState(false);
    const [info, setInfo] = useState('Hover over the cards for more informations');
    const [isPart1, setIsPart1] = useState(true);

    return (
        <div className={className}>
            {contentNumber === 0 && (
                <>
                    <h2>Connect with me on social media!</h2>
                    <div>
                        <a href='https://www.instagram.com/daviaugusto.oliveira/'>Instagram</a>
                        <a href='https://www.linkedin.com/in/davi-de-oliveira-5b7986108/'>Linkedin</a>
                        <a href='https://github.com/Tarus622'>Github</a>
                    </div>
                </>
            )}

            {contentNumber === 1 && (
                <>
                    <div>
                        <h3>Hello, World!</h3>
                        <p>My name is Davi Augusto de Oliveira, and I am a software developer since 2021. I am passionate about technologies and Computer Science, as well Science in general (I am also a Biological Sciences studant at UFRGS).</p>
                    </div>
                    <div>
                        <img src={ProfilePhoto}></img>
                    </div>
                </>
            )}

            {contentNumber === 2 && (
                <>
                    <div className='super-div-1'>
                        <p>{info}</p>
                    </div>
                    <div className='super-div-2'>
                        <button onClick={() => setIsPart1(true)}><img src={LeftArrow} /></button>
                        <div className='images-box'>
                            {isPart1 ? knowledges1.map(element => <Card key={element.id} title={element.title} image={element.image} info={element.info} setInfo={setInfo} />) : knowledges2.map(element => <Card key={element.id} title={element.title} image={element.image} info={element.info} setInfo={setInfo} />)}
                        </div>
                        <button onClick={() => setIsPart1(false)}><img src={RightArrow} /></button>
                    </div>
                </>
            )}

        </div>
    )
}

BoxContent.propTypes = {
    contentNumber: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired
}