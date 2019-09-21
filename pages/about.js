import Link from 'next/link';
import Image from "../components/Image";

const About = () => {
    return (
        <div>
            <Link href="/">
                {/*<a  style={{ fontSize: 20 }}>About Page</a>*/}
                <button  style={{ fontSize: 20 }}>Home Page</button>
            </Link>
            <h1>About</h1>
            <p>I was born in a town called Camelot</p>
            <Image />
        </div>
    );
}

export default About;