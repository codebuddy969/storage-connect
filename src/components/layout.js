import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
    const {meta, children} = props;
    console.log(props);
    return (
        <>
            <Head>
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}
