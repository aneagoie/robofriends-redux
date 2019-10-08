import Link from 'next/link';
import Image from "../components/Image";
// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const Index = () => {
    let x = {};
    console.log('Index render', x.toString());

    return (
        <div>
            <Link href="/about">
                <button  style={{ fontSize: 20 }}>About Page</button>
            </Link>

            <Link href="/robots">
                <button  style={{ fontSize: 20 }}>Robots Page</button>
            </Link>

            <a href="/about" style={{ fontSize: 20 }}>About Page</a>
            <a href="/robots" style={{ fontSize: 20 }}>Robots Page</a>

            <h1>I am a SSR magician</h1>
            <p>made with love</p>
            <Image />
        </div>
    );
};

export default Index;