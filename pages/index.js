import Link from 'next/link';

export default function Home(props) {
  return (
      <section>
        <p>WORKS AS EXPECTED!</p>
        <div className="separationContent">
          <p>LINK To about: -->
            <Link href='/about'>
              <a>About</a>
            </Link>
          </p>
        </div>
        <div className="separationContent">
          <p>
            These random names will update on page load/refresh, great!
          </p>
        {
          props.random.map( item => <div>{item}</div>)
        }
          <div>
            <br /><br />
            <strong>ISSUES</strong>:<br />
            <p>
              None. This works as I'd expect.
            </p>
          </div>
        </div>
        <style jsx>{`
        .separationContent {
          padding: 20px;
          border: 1px solid black;
          margin-bottom: 20px;
        }
        section {
          padding: 50px;
        }
      `}</style>
      </section>
  )
}
