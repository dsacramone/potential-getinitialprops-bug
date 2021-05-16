
export default function Home(props) {
  return (
      <section>
        <p>ABOUT PAGE</p>
        <div className="separationContent">
          <strong>Note:</strong> These are the static values I'd expect to see.
          <br /><br />
          Name: {props.name} <br />
          age: {props.age}
        </div>
        <div className="separationContent">
          <p>
            <strong>Dynamic Names generated from API call in "getInitialProps"</strong>
          </p>
          <div>
            {
              props.random.map( item => <div>{item}</div>)
            }
          </div>
          <div>
            <p>
              <strong>ISSUES</strong>:<br />
              These random names will <strong>NOT</strong> update on page load/refresh.<br />
              I'd expect these to be passed to the Component from "getInitialProps" in _app, like
              index.js does. Instead, these are stale values from when the build (npm run build) was done.
            </p>
            <br /><br />
            Remember, this is an issue in "prod" (npm run build). Dev seems to work as expected.
            Keep in mind this is a contrived example, but what if I had a global header that showed whether
            the user was "logged in" or not? or "dynamic" navigation items...but the rest of the page was static?
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

export async function getStaticProps() {
  return {
    props: {
      age: 9999,
      name: 'My Name Goes Here'
    },
  }
}
