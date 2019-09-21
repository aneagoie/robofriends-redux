import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Robots = (props) => {
    console.log('Robots render');

    return (
        <div>
            <h1>Robot</h1>
            <div>
                {props.robots.map(robot => (
                    <li key={robot.id}>
                        <Link href={`robot/${robot.id}`}>
                            <a>{robot.name}</a>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
};

Robots.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('Robots == getInitialProps');
    return {
        robots: data
    }
};

export default Robots