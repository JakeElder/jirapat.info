import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jirapat.info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <header css={{ paddingTop: 38 }}>
          <h1>
            <img
              src="/logo.png"
              width="279"
              height="134"
              alt="jirapat.info"
              title="jirapat.info"
              css={{ marginBottom: 6, position: "relative", left: -5 }}
            />
          </h1>
        </header>
        <section
          css={{
            backgroundImage: "url(/intro-box.png)",
            backgroundSize: "525px 362px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            height: 402,
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            css={{
              maxWidth: 360,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 6,
              fontSize: 15,
              lineHeight: 1.5,
              strong: {
                fontWeight: "bold",
              },
            }}
          >
            <p>
              Welcome to the personal website of professor and author{" "}
              <strong>Jirapat Jangjamras</strong>
            </p>
            <img
              css={{ marginTop: 22, marginBottom: 18 }}
              src="/content-separator.svg"
              width="38"
              height="23"
            />
            <p>
              If you would like to access the online material for my book,{" "}
              <strong>"American English Phonetics for Thai Learners"</strong>,{" "}
              it can be found by clicking the link below.
            </p>
          </div>
        </section>
        <section css={{ marginBottom: 18 }}>
          <a
            download
            href="/course-material.zip"
            css={{
              border: "1px solid #b89280",
              borderRadius: 11,
              width: 294,
              paddingTop: 16,
              paddingBottom: 13,
              display: "block",
              cusor: "pointer",
            }}
          >
            <img
              src="/button-content.svg"
              width="250"
              height="75"
              alt="American English Phonetics for Thai Learners Course Material"
              css={{ display: "block", margin: "auto", cursor: "pointer" }}
            />
          </a>
        </section>
        <div
          css={{
            height: 59,
            alignSelf: "stretch",
            backgroundImage: "url(/line-1.png)",
            backgroundSize: "147px 59px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(50% + 147px) 0",
            marginBottom: 12,
          }}
        />
        <footer
          css={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            alignItems: "center",
            backgroundImage: "url(/dandelion.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(50% - 140px) 50px",
            paddingBottom: 50,
          }}
        >
          <img
            src="/plant-cutting.png"
            width="84"
            height="127"
            css={{ marginBottom: 20, position: "relative", left: -6 }}
          />
          <a
            href="mailto:jirapat@cmu.ac.th"
            css={{ color: "#557aaf", marginBottom: 9 }}
          >
            jirapat@cmu.ac.th
          </a>
          <img
            src="/copyright.svg"
            width="171"
            height="32"
            alt="© 2020 Jirapat Jangjamras"
          />
        </footer>
      </div>
    </div>
  );
}
